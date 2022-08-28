import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerStartAction } from 'src/app/auth/store/actions/register.actions';
import * as selectors from 'src/app/auth/store/selectors';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
      user: this.registerForm.value
    }

    this.store.dispatch(registerStartAction({ request }));
    console.log('form: ', this.registerForm);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.minLength(6), Validators.maxLength(20), Validators.required]]
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
