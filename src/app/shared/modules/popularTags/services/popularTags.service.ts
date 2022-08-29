import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { FetchPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/fetchPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {

  constructor(
    private http: HttpClient
  ) {}

  fetchPopularTags(): Observable<string[]> {
    return this.http
      .get<FetchPopularTagsResponseInterface>(environment.apiUrlTags)
      .pipe(map(({ tags }) => tags))
  }
}
