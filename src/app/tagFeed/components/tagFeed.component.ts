import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tagFeed.component.html'
})
export class TagFeedComponent implements OnInit, OnDestroy {
  routeParamsSubscription: Subscription;
  tagName: string;
  apiUrl: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeListeners();
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }

  initializeListeners() {
    this.routeParamsSubscription = this.route.params
      .subscribe(({ slug }: Params) => {
        this.tagName = slug;
        this.apiUrl = `${environment.apiUrl}/articles?tag=${this.tagName}`;
      })
  }
}
