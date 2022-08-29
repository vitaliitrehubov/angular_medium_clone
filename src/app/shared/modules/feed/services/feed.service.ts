import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { FetchFeedResponseInterface } from 'src/app/shared/modules/feed/types/fetchFeedResponse.interface';
import { environment } from "src/environments/environment";

@Injectable()
export class FeedService {

  constructor(
    private http: HttpClient
  ) {}

  fetchFeed(url: string): Observable<FetchFeedResponseInterface> {
    return this.http
      .get<FetchFeedResponseInterface>(url)
  }
}
