import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { FetchArticleResponseInterface } from "src/app/shared/types/fetchArticleResponse.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient
  ) {}

  fetchArticle(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrlArticles}/${slug}`;

    return this.http
      .get<FetchArticleResponseInterface>(url)
      .pipe(map(({ article }) => article))
  }
}
