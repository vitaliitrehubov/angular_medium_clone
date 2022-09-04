import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

import { ComponentWithFormInterface } from 'src/app/shared/types/componentWithForm.interface';
import { ConfirmDialog } from "src/app/shared/modules/confirmDialog/components/confirmDialog.component";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FormGuard implements CanDeactivate<ComponentWithFormInterface> {

  constructor(
    private dialog: MatDialog
  ) {}

  canDeactivate(
    component: ComponentWithFormInterface,
    currRoute: ActivatedRouteSnapshot,
    currState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (component.isFormDataSaved() === true) {
      return true;
    }

    const dialogRef = this.dialog.open(ConfirmDialog, { disableClose: true });
    return dialogRef.afterClosed();
  }
}
