import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

export function getMockedData(): Interviews[] {
  const data: Interviews[] = [];
  for (let i = 1; i < 101; i++) {
    let interview = InterviewRound.ROUND_ONE;
    let result = InterviewResult.SELECTED;
    if (i % 3 === 0) {
      interview = InterviewRound.ROUND_TWO;
      if (i % 5 === 0) {
        result = InterviewResult.REJECTED;
      }
    } else if (i % 5 === 0) {
      interview = InterviewRound.ROUND_THREE;
    } else if (i % 7 === 0) {
      interview = InterviewRound.HR_ROUND;
      result = InterviewResult.OFFERED;
    }
    data.push({
      interview,
      interviewer: `Interviewer ${i}`,
      date: new Date(2000, 1, i).toDateString(),
      result
    });
  }
  return data;
}

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'interview', label: 'Interview' },
    { column: 'interviewer', label: 'Interviewer' },
    { column: 'date', label: 'Date' },
    { column: 'result', label: 'Result' }
  ];
  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);
  dataSource: MatTableDataSource<Interviews>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(getMockedData());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
