import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>{
    return this.store
      .pipe(
        select(isLoggedInSelector),
        map((isLoggedIn: boolean) =>
          isLoggedIn ? true : this.router.createUrlTree(['/login'])
        )
      );
  }
}
