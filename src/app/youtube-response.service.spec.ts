import { TestBed, inject } from '@angular/core/testing';

import { YoutubeResponseService } from './youtube-response.service';

describe('YoutubeResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeResponseService]
    });
  });

  it('should be created', inject([YoutubeResponseService], (service: YoutubeResponseService) => {
    expect(service).toBeTruthy();
  }));
});
