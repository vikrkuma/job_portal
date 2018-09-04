import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ShortListingService } from './short-listing.service';
import { getFakeShortListedCandidates } from '../test_utils/fake_short-listing.service';

describe('ShortListingService', () => {
  let service: ShortListingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortListingService]
    });
    service = TestBed.get(ShortListingService);
    httpTestingController = TestBed.get(HttpTestingController);
    spyOn(service.shortListedCandidate, 'next');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be make request to proper URL', () => {
    const response = getFakeShortListedCandidates();
    service.getShortListedCandidates(1);
    const url = 'assets/jsondata/short_listed.json';
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    expect(service.shortListedCandidate.next).toHaveBeenCalled();
  });
});
