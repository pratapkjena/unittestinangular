import { TestBed, inject } from '@angular/core/testing';

import { SampleService } from './sample.service';

xdescribe('SampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService]
    });
  });

  it('should be created', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));
});
