import { ShortListedCandidate } from './../models';
import { Subject } from 'rxjs';

export function getFakeShortListedCandidates(): ShortListedCandidate[] {
  const shortListedCandidate: ShortListedCandidate[] = [
    {
      id: 1,
      postingId: 1,
      name: 'Test Name 1',
      worksAt: 'Test Work At 1',
      experience: '2 Yrs',
      ctc: '11.23 L'
    }, {
      id: 2,
      postingId: 2,
      name: 'Test Name 2',
      worksAt: 'Test Work At 2',
      experience: '4 Yrs',
      ctc: '67.54 L'
    }, {
      id: 3,
      postingId: 3,
      name: 'Test Name 3',
      worksAt: 'Test Work At 3',
      experience: '7 Yrs',
      ctc: '90.54 L'
    }
  ];
  return shortListedCandidate;
}

export class FakeShortListedCandidatesService {
  shortListedCandidate = new Subject<ShortListedCandidate>();

  getShortListedCandidates = jasmine.createSpy('getShortListedCandidates')
    .and.returnValue(getFakeShortListedCandidates());

  clearShortListedCandidates = jasmine.createSpy('clearShortListedCandidates');
}
