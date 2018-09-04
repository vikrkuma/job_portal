import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShortListedCandidate } from '../models';
import { handleError } from './services.util';

/** Url for short listed candidates data api. */
const URL = 'assets/jsondata/short_listed.json';

@Injectable()
export class ShortListingService {
  shortListedCandidate = new Subject<ShortListedCandidate[]>();

  constructor(private readonly http: HttpClient) { }

  /** Gets the list of short listed candidates for the given job posting. */
  getShortListedCandidates(givenPostingId: number) {
    return this.http.get<ShortListedCandidate[]>(URL).pipe(
      catchError(handleError('Shortlisted Candidates', []))
    ).subscribe((shortListedCandidates: ShortListedCandidate[]) => {
      this.shortListedCandidate.next(filterShortListedCandidates(
        shortListedCandidates, givenPostingId));
    });
  }

  /**
   * Clears the current list of short listed candidates. Used when there are no
   * job postings listed.
   */
  clearShortListedCandidates() {
    this.shortListedCandidate.next([]);
  }
}

/** Filters the list short listed candidates with the given job posting id. */
function filterShortListedCandidates(
  shortListedCandidates: ShortListedCandidate[], givenPostingId: number):
  ShortListedCandidate[] {
  return shortListedCandidates.filter(
    ({ postingId }) => postingId === givenPostingId);
}
