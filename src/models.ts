export interface Interviews {
  interview: InterviewRound;
  interviewer: string;
  date: string;
  result: InterviewResult;
}

export enum InterviewRound {
  ROUND_ONE = 'Round#1',
  ROUND_TWO = 'Round#2',
  ROUND_THREE = 'Round#3',
  HR_ROUND = 'HR Round'
}

export enum InterviewResult {
  SELECTED = 'Selected',
  REJECTED = 'Rejected',
  OFFERED = 'Offered',
}

export interface ShortListedCandidates {
  name: string;
  worksAt: string;
  experience: string;
  ctc: string;
}

export interface PostedJobs {
  company: string;
  title: string;
  datePosted: string;
  status: JobStatus;
}

export enum JobStatus {
  OPEN = 'Open',
  CLOSED = 'Closed',
}
