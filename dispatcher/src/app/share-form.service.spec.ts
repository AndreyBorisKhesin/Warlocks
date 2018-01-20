import { TestBed, inject } from '@angular/core/testing';

import { ShareFormService } from './share-form.service';

describe('ShareFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareFormService]
    });
  });

  it('should be created', inject([ShareFormService], (service: ShareFormService) => {
    expect(service).toBeTruthy();
  }));
});
