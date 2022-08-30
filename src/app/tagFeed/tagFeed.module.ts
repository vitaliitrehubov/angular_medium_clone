import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { FeedModule } from "src/app/shared/modules/feed/feed.module";
import { BannerModule } from "src/app/shared/modules/banner/banner.module";
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feedToggler.module';

import { TagFeedComponent } from 'src/app/tagFeed/components/tagFeed.component';;

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  exports: [TagFeedComponent]
})
export class TagFeedModule {}
