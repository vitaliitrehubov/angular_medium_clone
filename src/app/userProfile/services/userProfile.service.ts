import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { UserProfileInterface } from 'src/app/userProfile/types/userProfile.interface';
import { FetchUserProfileResponseInterface } from 'src/app/userProfile/types/fetchUserProfileResponse.interface';
import { environment } from "src/environments/environment";

@Injectable()
export class UserProfileService {

  constructor(
    private http: HttpClient
  ) {}

  fetchUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrlProfiles}/${slug}`;

    return this.http
      .get<FetchUserProfileResponseInterface>(url)
      .pipe(map(({ profile }) => profile))
  }
}
