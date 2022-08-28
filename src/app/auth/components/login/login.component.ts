import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loginStartAction } from 'src/app/auth/store/actions/login.actions';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import * as selectors from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendValidationErrors$: Observable<string[] | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.loginForm.value
    };

    this.store.dispatch(loginStartAction({ request }));
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(
      select(selectors.isSubmittingSelector)
    );

    this.backendValidationErrors$ = this.store.pipe(
      select(selectors.backendErrorsSelector)
    );
  }
}

