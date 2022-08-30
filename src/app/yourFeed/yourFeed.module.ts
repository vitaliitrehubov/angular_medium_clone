import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { FeedModule } from "src/app/shared/modules/feed/feed.module";
import { BannerModule } from "src/app/shared/modules/banner/banner.module";
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feedToggler.module';

import { YourFeedComponent } from 'src/app/yourFeed/components/yourFeed.component';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  exports: [YourFeedComponent]
})
export class YourFeedModule {}
