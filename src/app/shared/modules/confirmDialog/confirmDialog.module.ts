import { NgModule } from "@angular/core";

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ConfirmDialog } from 'src/app/shared/modules/confirmDialog/components/confirmDialog.component';

const matComponents = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [ConfirmDialog],
  imports: [matComponents],
  exports: [MatDialogModule]
})
export class ConfirmDialogModule {}
