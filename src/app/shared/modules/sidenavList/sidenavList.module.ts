import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SidenavListComponent } from 'src/app/shared/modules/sidenavList/components/sidenavList.component';

@NgModule({
  declarations: [SidenavListComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatListModule,
    MatIconModule
  ],
  exports: [SidenavListComponent]
})
export class SidenavListModule {}
