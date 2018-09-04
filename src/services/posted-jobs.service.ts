import { SearchParams, JobStatus } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostedJob } from '../models';
import { handleError } from './services.util';

/** Url for job postings data api. */
const URL = 'assets/jsondata/posted_jobs.json';

@Injectable()
export class PostedJobsService {
  postedJobs = new Subject<PostedJob[]>();

  constructor(private readonly http: HttpClient) { }

  /** Gets the list of job postings according to the user search selection. */
  getPostedJobs(searchParams: SearchParams) {
    return this.http.get<PostedJob[]>(URL).pipe(
      catchError(handleError('Posted Jobs', []))
    ).subscribe((postedJobs: PostedJob[]) => {
      this.postedJobs.next(filterPostedJobs(postedJobs, searchParams));
    });
  }
}

/** Filters the list posted jobs with the given user search selection. */
function filterPostedJobs(postedJobs: PostedJob[], searchParams: SearchParams):
  PostedJob[] {
  if (searchParams.title) {
    if (searchParams.jobStatusClose && !searchParams.jobStatusOpen) {
      // CASE: When Job status closed is selected and title is given by user.
      return postedJobs.filter(({ status, title }) =>
        title.includes(searchParams.title) && status === JobStatus.CLOSED);
    } else if (searchParams.jobStatusOpen && !searchParams.jobStatusClose) {
      // CASE: When Job status opened is selected and title is given by user.
      return postedJobs.filter(({ status, title }) =>
        title.includes(searchParams.title) && status === JobStatus.OPEN);
    } else {
      // CASE: When Job statuses opened and closed are either selected or not
      // selected and title is given by user.
      return postedJobs.filter(
        ({ title }) => title.includes(searchParams.title));
    }
  } else {
    if (searchParams.jobStatusClose && searchParams.jobStatusOpen) {
      // CASE: When Job statuses opened and closed are selected.
      // Send all records i.e. no filtering is required.
      return postedJobs;
    } else if (searchParams.jobStatusClose) {
      // CASE: When only Job status closed is selected by user.
      return postedJobs.filter(({ status }) => status === JobStatus.CLOSED);
    } else if (searchParams.jobStatusOpen) {
      // CASE: When only Job status opened is selected by user.
      return postedJobs.filter(({ status }) => status === JobStatus.OPEN);
    } else {
      // CASE: When no selection is made by user. Send empty list.
      return [];
    }
  }
}
