import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";

import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { createArticleStartAction } from "src/app/createArticle/store/actions/createArticle.action";
import { ComponentWithFormInterface } from 'src/app/shared/types/componentWithForm.interface';
import * as createArticleSelectors from 'src/app/createArticle/store/selectors';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html'
})
export class CreateArticleComponent implements OnInit, ComponentWithFormInterface {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isFormDirty = false;

  isFormSubmitted = false;
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
    this.isFormSubmitted = true;
    this.store.dispatch(createArticleStartAction({ article }));
  }

  isFormDataSaved(): boolean {
    return this.isFormSubmitted || !this.isFormDirty;
  }

  onFormValueChanged(isDirty: boolean) {
    this.isFormDirty = isDirty;
  }
}
