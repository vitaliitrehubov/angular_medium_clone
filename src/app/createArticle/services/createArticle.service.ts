import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from "src/environments/environment";

@Injectable()
export class CreateArticleService {

  constructor(
    private http: HttpClient
  ) {}

  createArticle(article: ArticleInputInterface): Observable<ArticleInterface> {
    return this.http
      .post<SaveArticleResponseInterface>(environment.apiUrlArticles, { article })
      .pipe(map(({ article }: SaveArticleResponseInterface) => article))
  }
}
