import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { stringify, parseUrl } from 'query-string';

import { fetchFeedStartAction } from 'src/app/shared/modules/feed/store/actions/fetchFeed.actions';
import { FetchFeedResponseInterface } from 'src/app/shared/modules/feed/types/fetchFeedResponse.interface';
import { environment } from 'src/environments/environment';
import * as fetchFeedSelectors from 'src/app/shared/modules/feed/store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<FetchFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  queryParamSubs$: Subscription;

  limit = environment.articlesPerPage;
  baseUrl: string;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues() {
    this.baseUrl = this.router.url.split('?')[0];

    this.feed$ = this.store.pipe(
      select(fetchFeedSelectors.feedSelector)
    );

    this.isLoading$ = this.store.pipe(
      select(fetchFeedSelectors.isLoadingSelector)
    );

    this.error$ = this.store.pipe(
      select(fetchFeedSelectors.errorSelector)
    );
  }

  initializeListeners() {
    this.queryParamSubs$ = this.route.queryParams.subscribe(
      ({ page }: Params) => {
        this.currentPage = Number(page || '1');
        this.fetchFeed();
      }
    )
  }

  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      offset,
      limit: this.limit,
      ...parsedUrl.query
    });

    const url = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(
      fetchFeedStartAction({ url })
    );
  }

  ngOnDestroy(): void {
    this.queryParamSubs$.unsubscribe();
  }
}
