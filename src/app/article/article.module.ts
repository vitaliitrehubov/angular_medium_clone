import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ArticleService } from 'src/app/shared/services/article.service';
import { FetchArticleEffect } from 'src/app/article/store/effects/fetchArticle.effect';
import { reducers } from 'src/app/article/store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      FetchArticleEffect
    ]),
  ],
  exports: [],
  providers: [ArticleService]
})
export class ArticleModule {}
