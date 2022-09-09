import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { environment } from 'src/environments/environment';

describe('editArticle service', () => {
  let articleService: EditArticleService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditArticleService]
    });

    articleService = TestBed.inject(EditArticleService);
    httpController = TestBed.inject(HttpTestingController);
  })

  afterEach(() => httpController.verify());

  it('should create editArticle service', () => {
    expect(articleService).toBeTruthy();
  });

  it('should edit article correctly', () => {
    const slug = 'slug';
    const article: ArticleInputInterface = {
      title: 'New Title',
      body: '',
      description: '',
      tagList: []
    }

    articleService.updateArticle({ slug, articleInput: article })
      .subscribe(({ title }) => expect(title).toEqual(article.title));

    const req = httpController.expectOne(`${environment.apiUrlArticles}/${slug}`);

    expect(req.request.method).toEqual('PUT');

    req.flush({ article });
  });
})

