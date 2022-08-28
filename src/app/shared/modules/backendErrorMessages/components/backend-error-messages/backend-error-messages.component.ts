import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessages implements OnInit {
  @Input('errors') errorsProps: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

