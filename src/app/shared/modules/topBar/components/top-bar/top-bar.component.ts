import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as selectors from 'src/app/auth/store/selectors';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  user$: Observable<UserInterface | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.isLoggedIn$ = this.store.pipe(
      select(selectors.isLoggedInSelector)
    );

    this.isAnonymous$ = this.store.pipe(
      select(selectors.isAnonymousSelector)
    );

    this.user$ = this.store.pipe(
      select(selectors.userSelector)
    );

    this.isLoading$ = this.store.pipe(
      select(selectors.isLoadingSelector)
    );
  }
}
