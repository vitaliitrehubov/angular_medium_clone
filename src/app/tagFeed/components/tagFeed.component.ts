import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-tag-feed',
 templateUrl: './tagFeed.component.html'
})
export class TagFeedComponent implements OnInit {
  tagName: string;
  apiUrl: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    this.apiUrl = `${environment.apiUrl}/articles?tag=${this.tagName}`;
  }
}
