import { Component, OnInit, Input } from '@angular/core';

import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input('url') urlProps: string;
  @Input('limit') limitProps: number;
  @Input('total') totalProps: number;
  @Input('currentPage') currentPageProps: number;

  pagesCount: number;
  pages: number[];

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
