import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CreateArticleService } from "src/app/createArticle/services/createArticle.service";
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { environment } from 'src/environments/environment';

describe('createArticle service', () => {
  let createArticleService: CreateArticleService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateArticleService]
    });

    createArticleService = TestBed.inject(CreateArticleService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('should create article service', () => {
    expect(createArticleService).toBeTruthy();
  });

  it('should create a new article', () => {
    const article: ArticleInputInterface = {
      title: 'NEW ARTICLE',
      description: '',
      body: '',
      tagList: []
    };

    createArticleService.createArticle(article)
      .subscribe(({ title }) => expect(title).toEqual(article.title));

    const req = httpController.expectOne(environment.apiUrlArticles);

    expect(req.request.method).toEqual('POST');

    req.flush({ article });
  });
})
