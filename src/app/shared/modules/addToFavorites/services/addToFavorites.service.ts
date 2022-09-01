import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ArticleInterface } from "src/app/shared/types/article.interface";
import { environment } from "src/environments/environment";
import { FetchArticleResponseInterface } from "src/app/shared/types/fetchArticleResponse.interface";

@Injectable()
export class AddToFavoritesService {

  constructor(
    private http: HttpClient
  ) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http
      .post<FetchArticleResponseInterface>(url, {})
      .pipe(map(this.retrieveArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);

    return this.http
      .delete<FetchArticleResponseInterface>(url)
      .pipe(map(this.retrieveArticle))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrlArticles}/${slug}/favorite`;
  }

  retrieveArticle({ article }: FetchArticleResponseInterface): ArticleInterface {
    return article;
  }
}
