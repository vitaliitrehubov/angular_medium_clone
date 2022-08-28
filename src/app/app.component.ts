import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetchUserStartAction } from 'src/app/auth/store/actions/fetchUser.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUserStartAction());
  }
}
