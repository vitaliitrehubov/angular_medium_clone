import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BannerComponent } from 'src/app/shared/modules/banner/components/banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent],
  providers: []
})
export class BannerModule {}
