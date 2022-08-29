import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface FetchFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
