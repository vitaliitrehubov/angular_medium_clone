import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchFeedStartAction } from 'src/app/shared/modules/feed/store/actions/fetchFeed.actions';
import { FetchFeedResponseInterface } from 'src/app/shared/modules/feed/types/fetchFeedResponse.interface';
import * as fetchFeedSelectors from 'src/app/shared/modules/feed/store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<FetchFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
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

  fetchData() {
    this.store.dispatch(
      fetchFeedStartAction({ url: this.apiUrlProps })
    );
  }
}
