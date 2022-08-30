import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { TagListModule } from "src/app/shared/modules/tagList/tagList.module";

import { ArticleComponent } from 'src/app/article/components/article.component';
import { ArticleService } from 'src/app/article/services/article.service';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { FetchArticleEffect } from 'src/app/article/store/effects/fetchArticle.effect';
import { DeleteArticleEffect } from 'src/app/article/store/effects/deleteArticle.effect';
import { reducers } from 'src/app/article/store/reducers';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      FetchArticleEffect,
      DeleteArticleEffect
    ]),
    RouterModule.forChild(routes),

    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  providers: [
    SharedArticleService,
    ArticleService
  ]
})
export class ArticleModule {}
