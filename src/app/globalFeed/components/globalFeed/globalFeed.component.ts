import { Component } from "@angular/core";

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html'
})
export class GlobalFeedComponent {
  apiUrlFeed = `${environment.apiUrl}/articles`;
}
