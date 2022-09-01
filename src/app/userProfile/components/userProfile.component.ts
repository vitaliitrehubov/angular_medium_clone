import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, Subscription, combineLatest } from "rxjs";
import { map, filter } from "rxjs/operators";

import { UserProfileInterface } from "../types/userProfile.interface";
import { fetchUserProfileStartAction } from 'src/app/userProfile/store/actions/fetchUserProfile.action';
import * as userProfileSelectors from 'src/app/userProfile/store/selectors';
import { userSelector } from "src/app/auth/store/selectors";
import { UserInterface } from "src/app/shared/types/user.interface";
import { environment } from "src/environments/environment";

@Component({
  templateUrl: './userProfile.component.html'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  slug: string;

  userProfile: UserProfileInterface;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  isCurrUserProfile$: Observable<boolean>;
  userProfileSubscription: Subscription;
  routeParamSubscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.isLoading$ = this.store.pipe(
      select(userProfileSelectors.isLoadingSelector)
    );

    this.errors$ = this.store.pipe(
      select(userProfileSelectors.errorsSelector)
    );

    this.isCurrUserProfile$ = combineLatest([
      this.store.pipe(select(userSelector)),
      this.store.pipe(select(userProfileSelectors.userSelector))
    ])
      .pipe(
        filter(Boolean),
        map(([user, userProfile]: [UserInterface, UserProfileInterface]) =>
          user?.username === userProfile?.username
        )
      )
  }

  initializeListeners() {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelectors.userSelector))
      .subscribe((userProfile: UserProfileInterface) => this.userProfile = userProfile);

    this.routeParamSubscription = this.route.params.subscribe(
      ({ slug }: Params) => {
        this.slug = slug;
        this.fetchUserProfile();
      }
    )
  }

  fetchUserProfile() {
    this.store.dispatch(
      fetchUserProfileStartAction({ slug: this.slug })
    );
  }

  getApiUrl(): string {
    const articlesType = this.router.url
      .includes('favorites') ? 'favorited' : 'author';

    return `${environment.apiUrlArticles}?${articlesType}=${this.slug}`;
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe();
    this.routeParamSubscription.unsubscribe();
  }
}
