/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlagArticleServiceService } from './flagArticleService.service';

describe('Service: FlagArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlagArticleServiceService]
    });
  });

  it('should ...', inject([FlagArticleServiceService], (service: FlagArticleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
