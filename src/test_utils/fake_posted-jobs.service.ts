import { PostedJob, JobStatus } from './../models';
import { Subject } from 'rxjs';

export function getFakePostedJobs(): PostedJob[] {
  const postedJob: PostedJob[] = [
    {
      id: 1,
      company: 'Test Company 1',
      title: 'Test Title 1',
      datePosted: '1999-01-01',
      status: JobStatus.OPEN
    }, {
      id: 2,
      company: 'Test Company 2',
      title: 'Test Title 2',
      datePosted: '1999-03-01',
      status: JobStatus.OPEN
    }, {
      id: 3,
      company: 'Test Company 3',
      title: 'Test Title 3',
      datePosted: '1999-03-01',
      status: JobStatus.CLOSED
    }
  ];
  return postedJob;
}

export class FakePostedJobsService {
  postedJobs = new Subject<PostedJob>();

  getPostedJobs = jasmine.createSpy('getPostedJobs')
    .and.returnValue(getFakePostedJobs());
}
