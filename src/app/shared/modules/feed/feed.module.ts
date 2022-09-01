import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { TagListModule } from "src/app/shared/modules/tagList/tagList.module";
import { AddToFavoritesModule } from 'src/app/shared/modules/addToFavorites/addToFavorites.module';

import { FetchFeedEffect } from 'src/app/shared/modules/feed/store/effects/fetchFeed.effect';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from "src/app/shared/modules/feed/services/feed.service";
import { reducers } from 'src/app/shared/modules/feed/store/reducers';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([
      FetchFeedEffect
    ]),

    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
