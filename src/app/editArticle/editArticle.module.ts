import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

import { EditArticleComponent } from 'src/app/editArticle/components/editArticle.component';
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { FetchArticleEffect } from 'src/app/editArticle/store/effects/fetchArticle.effect';
import { UpdateArticleEffect } from 'src/app/editArticle/store/effects/updateArticle.effect';
import { reducers } from 'src/app/editArticle/store/reducers';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      FetchArticleEffect,
      UpdateArticleEffect
    ]),
    StoreModule.forFeature('editArticle', reducers),

    ArticleFormModule,
    LoadingModule
  ],
  providers: [
    EditArticleService,
    SharedArticleService
  ]
})
export class EditArticleModule {}
