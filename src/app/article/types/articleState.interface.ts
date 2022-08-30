import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface ArticleStateInterface {
  data: ArticleInterface | null;
  isLoading: boolean;
  error: string | null;
}
