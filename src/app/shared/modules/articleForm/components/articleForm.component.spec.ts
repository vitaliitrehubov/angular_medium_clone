import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { first, last } from 'rxjs';

import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm.component';

describe('articleForm component', () => {
  let fixture: ComponentFixture<ArticleFormComponent>;
  let component: ArticleFormComponent;
  let compiled: HTMLElement;

  const emptyInitialValue = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  const validFormValue = {
    title: 'title',
    description: 'description',
    body: 'hello world some pretty dummy text!!!!!!!!',
    tagList: ''
  }

  const correctInitialFormValue = {
    ...emptyInitialValue,
    tagList: emptyInitialValue.tagList.join(' ')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFormComponent],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleFormComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    component.initialValuesProps = emptyInitialValue;
    fixture.detectChanges();
  });


  it('should initialize form', () => {
    const spy = spyOn(component, 'initializeForm');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('formDirtyEvent should emit false initially', () => {
    component.formDirtyEvent.pipe(first()).subscribe((value) => {
      expect(value).toEqual(false);
    })
  });

  it('setting form value should change formDirtyEvent value to true', () => {
    component.formDirtyEvent.pipe(last()).subscribe((value) => {
      expect(value).toEqual(true);
    });

    component.form.setValue(validFormValue);
  })

  it('should set correct initial value', () => {
    component.ngOnInit();
    expect(component.form.value).toEqual(correctInitialFormValue);
  });

  it('required empty fields should be invalid', () => {
    component.ngOnInit();
    const { form } = component;
    expect(form.get('title').invalid).toBeTruthy();
    expect(form.get('body').invalid).toBeTruthy();
    expect(form.get('description').invalid).toBeTruthy();
    expect(form.get('tagList').invalid).toBeFalsy();
  });

  it('should have correct inputs validation', () => {
    const { form } = component;
    form.setValue(validFormValue);

    for(const field in form.controls) {
      expect(form.controls[field].valid).toBeTruthy();
    }

    expect(form.valid).toBeTruthy();
  })

  it('submit button should be disabled until form is valid', () => {
    expect(compiled.querySelector('form button[type="submit"]')
      .hasAttribute('disabled')).toBeTruthy();
  });

  it('submit button should not be disabled when form is valid', () => {
    component.form.setValue(validFormValue);

    expect(component.form.value).toEqual(validFormValue);
    expect(compiled.querySelector('form button[type="submit"]')
      .getAttribute('disabled')).toBeFalsy();
  });

  it('click on submit button should trigger articleSubmitEvent', (done: DoneFn) => {
    const submitBtn = compiled.querySelector('form button[type="submit"]');
    component.form.setValue(validFormValue);

    component.articleSubmitEvent.subscribe((value) => {
      expect(value).toEqual({ ...validFormValue, tagList: [] });
    });

    submitBtn.dispatchEvent(new Event('click'));
    done();
  })
});



