import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as selectors from 'src/app/auth/store/selectors';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenavList.component.html',
  styleUrls: ['./sidenavList.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output('sidenavClose')
  sidenavCloseEvent = new EventEmitter<void>();

  isLoading$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  user$: Observable<UserInterface | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  onCloseSidenav() {
    this.sidenavCloseEvent.emit();
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
  }
}
