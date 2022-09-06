import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { AddToFavoritesComponents } from './addToFavorites.component';

describe('addToFavorites component', () => {
  let fixture: ComponentFixture<AddToFavoritesComponents>;
  let component: AddToFavoritesComponents;
  let compiled: HTMLElement;
  let store: MockStore;

  const storeMock = jasmine.createSpyObj('Store', ['dispatch']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToFavoritesComponents],
      providers: [{ provide: Store, useValue: storeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToFavoritesComponents);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('handleLike func should increase likes counter correctly', () => {
    let count = 0;
    component.isFavorited = false;
    component.favoritesCount = count;
    component.handleLike();

    expect(component.favoritesCount).toBe(count + 1);
    expect(component.isFavorited).toBeTruthy();
  });

  it('handleLike func should decrease likes counter correctly', () => {
    let count = 1;
    component.isFavorited = true;
    component.favoritesCount = count;
    component.handleLike();

    expect(component.favoritesCount).toBe(count - 1);
    expect(component.isFavorited).toBeFalsy();
  });

  it('handleLike func should dispatch an action', () => {
    component.handleLike();
    expect(storeMock.dispatch).toHaveBeenCalled();
  });

  it('clicking like button should trigger handleLike func', () => {
    const likeBtn = compiled.querySelector('button');
    const spy = spyOn(component, 'handleLike');
    likeBtn.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalledTimes(1);
  })
})
