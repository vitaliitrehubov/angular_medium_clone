import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loading',
  styleUrls: ['./loading.component.scss'],
  template: `
    <div
      [ngStyle]="computeStyles()"
      class="skeleton-loading">
    </div>
  `
})
export class LoadingComponent {
  @Input('CWidth') CWidthProps: string | null;
  @Input('CHeight') CHeightProps: string | null;
  @Input('BRadius') BRadiusProps: string | null;

  computeStyles(): { [prop: string]: string } {
    return {
      'width.px': this.CWidthProps ?? '',
      'height.px': this.CHeightProps ?? '',
      'border-radius': this.BRadiusProps ?? ''
    }
  }
}
