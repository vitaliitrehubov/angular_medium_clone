import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";

import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { createArticleStartAction } from "src/app/createArticle/store/actions/createArticle.action";
import * as createArticleSelectors from 'src/app/createArticle/store/selectors';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html'
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>;
  errors$: Observable<string[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(
      select(createArticleSelectors.isSubmittingSelector)
    );

    this.errors$ = this.store.pipe(
      select(createArticleSelectors.errorsSelector)
    );
  }

  onCreateArticle(article: ArticleInputInterface) {
    this.store.dispatch(createArticleStartAction({ article }));
  }
}
