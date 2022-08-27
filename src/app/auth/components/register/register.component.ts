import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { registerStartAction } from 'src/app/auth/store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    this.store.dispatch(registerStartAction({ request: this.registerForm.value }));
    console.log('form: ', this.registerForm);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.minLength(6), Validators.maxLength(20), Validators.required]]
    });
  }
}
