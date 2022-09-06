import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { AppComponent } from 'src/app/app.component';

describe('app component', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore;
  const storeMock = jasmine.createSpyObj('Store', ['dispatch']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: Store, useValue: storeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('ngOnInit should dispatch an action', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
})
