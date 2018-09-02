import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { PostedJobs, JobStatus } from '../../models';

export function getMockedData(): PostedJobs[] {
  const data = [];
  for (let i = 1; i < 101; i++) {
    const status = i % 3 === 0 ? JobStatus.CLOSED : JobStatus.OPEN;
    data.push({
      company: `Company ${i}`,
      title: `Title ${i}`,
      datePosted: new Date(2000, 1, i).toDateString(),
      status
    });
  }
  return data;
}

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.scss']
})
export class PostedJobsComponent implements OnInit {
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'company', label: 'Company' },
    { column: 'title', label: 'Title' },
    { column: 'datePosted', label: 'Date Posted' },
    { column: 'status', label: 'Status' }
  ];
  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);
  dataSource: MatTableDataSource<PostedJobs>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(getMockedData());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
