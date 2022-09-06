import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { userSelector } from 'src/app/auth/store/selectors';
import * as settingsSelectors from 'src/app/settings/store/selectors';
import { UserInterface } from "src/app/shared/types/user.interface";
import { UserInputInterface } from "src/app/shared/types/userInput.interface";
import { updateUserStartAction } from 'src/app/auth/store/actions/updateUser.actions';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  hide = true;
  form: FormGroup;
  user: UserInterface | null;
  userSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  errors$: Observable<string[] | null>;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeListeners();
    this.initializeValues();
  }

  initializeListeners() {
    this.userSubscription = this.store
      .pipe(
        select(userSelector),
        filter(Boolean)
      )
      .subscribe((user: UserInterface) => {
        this.user = user;
        this.initializeForm()
      });
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(
      select(settingsSelectors.isSubmittingSelector)
    );

    this.errors$ = this.store.pipe(
      select(settingsSelectors.errorsSelector)
    );
  }

  initializeForm() {
    const { image, username, bio, email } = this.user;

    this.form = this.fb.group({
      'image': [image, []],
      'username': [username, [Validators.required]],
      'bio': [bio],
      'email': [email, [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    const userInput: UserInputInterface = {
      ...this.user,
      ...this.form.value
    }

    this.store.dispatch(updateUserStartAction({ userInput }));
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
