import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InterviewsService } from './interviews.service';
import { getFakeInterviews } from '../test_utils/fake_interviews.service';

describe('InterviewsService', () => {
  let service: InterviewsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InterviewsService]
    });
    service = TestBed.get(InterviewsService);
    httpTestingController = TestBed.get(HttpTestingController);
    spyOn(service.interviews, 'next');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be make request to proper URL', () => {
    const response = getFakeInterviews();
    service.getInterviews(1);
    const url = 'assets/jsondata/interviews.json';
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    expect(service.interviews.next).toHaveBeenCalled();
  });
});
