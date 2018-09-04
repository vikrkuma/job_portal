import { Interview, InterviewRound, InterviewResult } from './../models';
import { Subject } from 'rxjs';

export function getFakeInterviews(): Interview[] {
  const interviews: Interview[] = [
    {
      id: 1,
      candidateId: 1,
      interview: InterviewRound.ROUND_ONE,
      interviewer: 'Test Interviewer 1',
      date: '2000-01-01',
      result: InterviewResult.SELECTED
    }, {
      id: 2,
      candidateId: 2,
      interview: InterviewRound.ROUND_ONE,
      interviewer: 'Test Interviewer 2',
      date: '2000-12-11',
      result: InterviewResult.REJECTED
    }, {
      id: 3,
      candidateId: 3,
      interview: InterviewRound.HR_ROUND,
      interviewer: 'Test Interviewer 3',
      date: '2000-08-05',
      result: InterviewResult.OFFERED
    }
  ];
  return interviews;
}

export class FakeInterviewsService {
  interviews = new Subject<Interview>();

  getInterviews = jasmine.createSpy('getInterviews')
    .and.returnValue(getFakeInterviews());

  clearInterviews = jasmine.createSpy('clearInterviews');
}
