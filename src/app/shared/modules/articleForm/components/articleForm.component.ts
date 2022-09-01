import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';

@Component({
  selector: 'article-form',
  templateUrl: './articleForm.component.html'
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: string[] | null;

  @Output('articleSubmit')
  articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    const { title, description, body, tagList } = this.initialValuesProps;

    this.form = this.fb.group({
      'title': [title, [Validators.required]],
      'description': [description, [Validators.required]],
      'body': [body, [Validators.required]],
      'tagList': [tagList.join(' '), [Validators.required]]
    });
  }

  onSubmit() {
    let { tagList } = this.form.value;
    tagList = tagList?.split(' ')?.filter((val) => val !== '');

    this.articleSubmitEvent.emit({
      ...this.form.value,
      tagList
    });
  }
}
