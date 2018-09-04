import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostedJobsService } from './posted-jobs.service';
import { getFakePostedJobs } from '../test_utils/fake_posted-jobs.service';

describe('PostedTitleService', () => {
  let service: PostedJobsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostedJobsService]
    });
    service = TestBed.get(PostedJobsService);
    httpTestingController = TestBed.get(HttpTestingController);
    spyOn(service.postedJobs, 'next');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be make request to proper URL', () => {
    const response = getFakePostedJobs();
    service.getPostedJobs({
      jobStatusOpen: false,
      jobStatusClose: false,
      title: null
    });
    const url = 'assets/jsondata/posted_jobs.json';
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    expect(service.postedJobs.next).toHaveBeenCalled();
  });
});
