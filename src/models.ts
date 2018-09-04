/** Structure for the data received for the interviews. */
export interface Interview {
  id: number;
  candidateId: number;
  interview: InterviewRound;
  interviewer: string;
  date: string;
  result: InterviewResult;
}

/** Available options for the type of interview round of each interviews. */
export enum InterviewRound {
  ROUND_ONE = 'Round#1',
  ROUND_TWO = 'Round#2',
  ROUND_THREE = 'Round#3',
  HR_ROUND = 'HR Round'
}

/** Available options for the result of each interviews. */
export enum InterviewResult {
  SELECTED = 'Selected',
  REJECTED = 'Rejected',
  OFFERED = 'Offered',
}

/** Structure for the data received for the short listed candidates. */
export interface ShortListedCandidate {
  id: number;
  postingId: number;
  name: string;
  worksAt: string;
  experience: string;
  ctc: string;
}

/** Structure for the data received for the job postings. */
export interface PostedJob {
  id: number;
  company: string;
  title: string;
  datePosted: string;
  status: JobStatus;
}

/** Structure in which user search selection will be modeled. */
export interface SearchParams {
  jobStatusOpen: boolean;
  jobStatusClose: boolean;
  title: string | null;
}

/** Available options for the status of each job postings. */
export enum JobStatus {
  OPEN = 'Open',
  CLOSED = 'Closed',
}
