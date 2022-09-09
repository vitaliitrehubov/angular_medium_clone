import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CreateArticleService } from 'src/app/createArticle/services/createArticle.service';
import { environment } from 'src/environments/environment';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';

describe('createArticle service', () => {
  let httpController: HttpTestingController;
  let articleService: CreateArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateArticleService]
    });

    httpController = TestBed.inject(HttpTestingController);
    articleService = TestBed.inject(CreateArticleService);
  });

  afterEach(() => httpController.verify());

  it('createArtice service is created', () => {
    expect(articleService).toBeTruthy();
  });

  it('should create an article', () => {
    const article: ArticleInputInterface = {
      title: 'New Article',
      description: '',
      body: '',
      tagList: []
    }

    articleService.createArticle(article)
      .subscribe(({ title }) => expect(title).toEqual(article.title));

    const req = httpController.expectOne(environment.apiUrlArticles);

    expect(req.request.method).toEqual('POST');

    req.flush({ article });
  });
})

