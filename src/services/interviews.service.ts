import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Interview } from '../models';
import { handleError } from './services.util';

/** Url for interview data api. */
const URL = 'assets/jsondata/interviews.json';

@Injectable()
export class InterviewsService {
  interviews = new Subject<Interview[]>();

  constructor(private readonly http: HttpClient) { }

  /** Gets the list of interviews taken the given candidate. */
  getInterviews(givenCandidateId: number) {
    return this.http.get<Interview[]>(URL).pipe(
      catchError(handleError('Interviews', []))
    ).subscribe((interviews: Interview[]) => {
      this.interviews.next(filterInterviews(interviews, givenCandidateId));
    });
  }

  /**
   * Clears the current list of interviews. Used when there is no candidate is
   * short listed.
   */
  clearInterviews() {
    this.interviews.next([]);
  }
}

/** Filters the list interviews with the given candidate id. */
function filterInterviews(interviews: Interview[], givenCandidateId: number):
  Interview[] {
  return interviews.filter(
    ({ candidateId }) => candidateId === givenCandidateId);
}
