import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';

import { AuthService } from "src/app/auth/services/auth.service";
import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";
import { reducers } from "src/app/auth/store/reducers";
import { FetchUserEffect } from 'src/app/auth/store/effects/fetchUser.effect';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { UpdateUserEffect } from 'src/app/auth/store/effects/updateUser.effect';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { LogoutEffect } from 'src/app/auth/store/effects/logout.effect';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CanActivateGuard } from "src/app/auth/services/canActivateGuard.service";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateGuard],
  }
];

const components = [
  RegisterComponent,
  LoginComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      FetchUserEffect,
      RegisterEffect,
      UpdateUserEffect,
      LoginEffect,
      LogoutEffect
    ]),

    MatButtonModule,
    MatInputModule,
    BackendErrorMessagesModule
  ],
  exports: components,
  providers: [
    AuthService,
    PersistanceService,
    CanActivateGuard
  ]
})
export class AuthModule { }

