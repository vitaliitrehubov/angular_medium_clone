import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { fetchArticleStartAction } from 'src/app/article/store/actions/fetchArticle.action';
import { deleteArticleStartAction } from 'src/app/article/store/actions/deleteArticle.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import * as articleSelectors from 'src/app/article/store/selectors';
import { userSelector } from "src/app/auth/store/selectors";
import { UserInterface } from "src/app/shared/types/user.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: ArticleInterface;

  articleSubscription: Subscription;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
    this.fetchArticle();
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.error$ = this.store.pipe(
      select(articleSelectors.errorSelector)
    );

    this.isLoading$ = this.store.pipe(
      select(articleSelectors.isLoadingSelector)
    );

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelectors.articleSelector)),
      this.store.pipe(select(userSelector))
    ]).pipe(
      map(([article, user]: [ArticleInterface | null, UserInterface | null]) => {
        if (!article || !user) return false;
        return article.author.username === user.username;
      })
    )
  }

  initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelectors.articleSelector))
      .subscribe((article: ArticleInterface | null) =>
        (this.article = article)
      );
  }

  fetchArticle() {
    this.store.dispatch(fetchArticleStartAction({ slug: this.slug }));
  }

  onDeleteArticle() {
    this.store.dispatch(deleteArticleStartAction({ slug: this.slug }));
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
