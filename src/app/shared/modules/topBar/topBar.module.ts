import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule {}
