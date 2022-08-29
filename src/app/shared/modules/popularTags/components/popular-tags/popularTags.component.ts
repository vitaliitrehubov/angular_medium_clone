import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchTagsStartAction } from 'src/app/shared/modules/popularTags/store/actions/fetchTags.action';
import * as popularTagsSelectors from 'src/app/shared/modules/popularTags/store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html'
})
export class PopularTagsComponent implements OnInit {

  tags$: Observable<string[] | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchTags();
  }

  fetchTags() {
    this.store.dispatch(fetchTagsStartAction());
  }

  initializeValues() {
    this.tags$ = this.store.pipe(
      select(popularTagsSelectors.popularTagsSelector)
    );

    this.isLoading$ = this.store.pipe(
      select(popularTagsSelectors.isLoadingTagsSelector)
    );

    this.error$ = this.store.pipe(
      select(popularTagsSelectors.errorTagsSelector)
    );
  }
}
