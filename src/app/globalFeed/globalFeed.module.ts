import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { FeedModule } from "src/app/shared/modules/feed/feed.module";
import { BannerModule } from "src/app/shared/modules/banner/banner.module";
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feedToggler.module';

import { GlobalFeedComponent } from "src/app/globalFeed/components/globalFeed/globalFeed.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  exports: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
