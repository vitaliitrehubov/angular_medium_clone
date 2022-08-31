import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import * as updateArticleSelectors from 'src/app/editArticle/store/selectors';
import { fetchArticleStartAction } from 'src/app/editArticle/store/actions/fetchArticle.action';
import { updateArticleStartAction } from 'src/app/editArticle/store/actions/updateArticle.action';

@Component({
  templateUrl: './editArticle.component.html'
})
export class EditArticleComponent implements OnInit {
  slug: string;

  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  errors$: Observable<string[] | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.fetchArticle();
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.initialValues$ = this.store.pipe(
      select(updateArticleSelectors.articleSelector),
      filter(Boolean),
      map(this.retrieveArticleInputValues)
    );

    this.isSubmitting$ = this.store.pipe(
      select(updateArticleSelectors.isSubmittingSelector)
    );

    this.isLoading$ = this.store.pipe(
      select(updateArticleSelectors.isLoadingSelector)
    );

    this.errors$ = this.store.pipe(
      select(updateArticleSelectors.errorsSelector)
    );
  }

  fetchArticle() {
    this.store.dispatch(fetchArticleStartAction({ slug: this.slug }));
  }

  onUpdateArticle(articleInput: ArticleInputInterface) {
    this.store.dispatch(
      updateArticleStartAction({
        slug: this.slug,
        articleInput
      })
    );
  }

  retrieveArticleInputValues({ title, description, body, tagList }: ArticleInterface) {
    return {
      title,
      description,
      body,
      tagList
    }
  }
}
