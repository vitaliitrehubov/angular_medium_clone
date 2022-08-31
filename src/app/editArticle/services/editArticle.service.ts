import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "src/environments/environment";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { SaveArticleResponseInterface } from "src/app/shared/types/saveArticleResponse.interface";

@Injectable()
export class EditArticleService {

  constructor(
    private http: HttpClient
  ) {}

  updateArticle(payload: {
    slug: string;
    articleInput: ArticleInputInterface
  }): Observable<ArticleInterface> {
    const url = `${environment.apiUrlArticles}/${payload.slug}`;

    return this.http
      .put<SaveArticleResponseInterface>(url, { article: payload.articleInput })
      .pipe(map(({ article }) => article))
  }
}
