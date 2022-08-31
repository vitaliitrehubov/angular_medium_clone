import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';

import { CreateArticleEffect } from 'src/app/createArticle/store/effects/createArticle.effect';
import { reducers } from 'src/app/createArticle/store/reducers';
import { CreateArticleService } from 'src/app/createArticle/services/createArticle.service';
import { CreateArticleComponent } from 'src/app/createArticle/components/createArticle.component';


const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([
      CreateArticleEffect
    ]),

    ArticleFormModule
  ],
  providers: [CreateArticleService]
})
export class CreateArticleModule {}
