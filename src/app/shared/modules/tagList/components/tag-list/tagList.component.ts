import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  template: `
    <ul class="tag-list">
      <li
        *ngFor="let tag of tagsProps"
        class="tag-pill tag-default tag-outline"
      >
        {{ tag }}
      </li>
    </ul>
  `
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
