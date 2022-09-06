import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageModule } from "src/app/shared/modules/errorMessage/errorMessage.module";

import { SettingsComponent } from 'src/app/settings/components/settings.component';
import { reducers } from 'src/app/settings/store/reducers';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ErrorMessageModule
  ]
})
export class SettingsModule {}
