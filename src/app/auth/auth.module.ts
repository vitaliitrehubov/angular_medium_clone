import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducers } from "src/app/auth/store/reducers";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

const components = [
  RegisterComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers)
  ],
  exports: components
})
export class AuthModule {}
