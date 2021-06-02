/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ArticleNoService } from './article-no.service';

describe('Service: ArticleNo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleNoService]
    });
  });

  it('should ...', inject([ArticleNoService], (service: ArticleNoService) => {
    expect(service).toBeTruthy();
  }));
});
