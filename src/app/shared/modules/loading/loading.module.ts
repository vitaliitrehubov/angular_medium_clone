import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoadingComponent } from 'src/app/shared/modules/loading/components/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent]
})
export class LoadingModule {}
