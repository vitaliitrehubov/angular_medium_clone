import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isSubmitting: boolean;
  isLoading: boolean;
  errors: string[] | null;
}
