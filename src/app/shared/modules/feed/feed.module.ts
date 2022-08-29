import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { FetchFeedEffect } from 'src/app/shared/modules/feed/store/effects/fetchFeed.effect';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from "src/app/shared/modules/feed/services/feed.service";
import { reducers } from 'src/app/shared/modules/feed/store/reducers';

const components = [
  FeedComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([
      FetchFeedEffect
    ])
  ],
  exports: components,
  providers: [FeedService]
})
export class FeedModule { }
