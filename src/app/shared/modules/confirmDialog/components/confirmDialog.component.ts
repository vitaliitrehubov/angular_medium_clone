import { Component } from "@angular/core";

@Component({
  selector: 'confirm-dialog',
  template: `
    <h2 style="display: flex; align-items: center">
      <mat-icon fontIcon="warning" style="color: orangered;"></mat-icon>
      &nbsp; Form data is not saved!
    </h2>
    <mat-dialog-content>
      <p>If you leave this page, form data will be lost. Do you want to proceed?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialog { }
