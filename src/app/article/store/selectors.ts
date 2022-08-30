import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

const articleFeatureSelector =
  createFeatureSelector<AppStateInterface, ArticleStateInterface>('article');

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

