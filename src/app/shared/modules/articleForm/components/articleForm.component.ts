import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';

@Component({
  selector: 'article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: string[] | null;

  @Output('articleSubmit')
  articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  @Output('isFormDirty')
  formDirtyEvent = new EventEmitter<boolean>();

  form: FormGroup;
  isFormDirtySubscription: Subscription;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.isFormDirtySubscription.unsubscribe();
  }

  initializeForm() {
    const { title, description, body, tagList } = this.initialValuesProps;

    this.form = this.fb.group({
      'title': [title, [Validators.required, this.validateForEmptyField]],
      'description': [description, [Validators.required, this.validateForEmptyField]],
      'body': [
        body,
        [Validators.required, this.validateLength, this.validateForEmptyField]
      ],
      'tagList': [tagList.join(' ')]
    });
  }

  initializeListeners() {
    this.isFormDirtySubscription = this.form.valueChanges.subscribe(
      ({ title, description, body, tagList }) => {
        if (
          title.trim() !== this.initialValuesProps.title
          || description.trim() !== this.initialValuesProps.description
          || body.trim() !== this.initialValuesProps.body
          || tagList.trim() !== this.initialValuesProps.tagList.join(' ')
        ) {
          this.formDirtyEvent.emit(true);
        } else {
          this.formDirtyEvent.emit(false);
        }
      }
    )
  }

  onSubmit() {
    let { tagList } = this.form.value;
    tagList = tagList?.split(' ')?.filter((val) => val !== '');

    this.articleSubmitEvent.emit({
      ...this.form.value,
      tagList
    });
  }

  validateForEmptyField(
    { value }: FormControl
  ): { [error: string]: boolean } | null {
    return (value?.trim() === '' || null || undefined)
      ? { emptyField: true }
      : null
  }

  validateLength(
    { value }: FormControl
  ): { [error: string]: boolean } | null {
    const valueLength = value?.trim()?.length;

    return (valueLength > 0 && valueLength < 20)
      ? { minLength: true }
      : null
  }
}
