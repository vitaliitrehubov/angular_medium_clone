import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule,

    MatIconModule,
    MatToolbarModule,
    LoadingModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule {}
