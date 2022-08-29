import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';

import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popular-tags/popularTags.component';
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';
import { reducers } from 'src/app/shared/modules/popularTags/store/reducers';
import { FetchTagsEffect } from 'src/app/shared/modules/popularTags/store/effects/fetchTags.effect';

@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    StoreModule.forFeature('tags', reducers),
    EffectsModule.forFeature([
      FetchTagsEffect
    ]),

    LoadingModule,
    ErrorMessageModule
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
