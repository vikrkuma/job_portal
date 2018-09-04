import { InterviewsService } from './../../services/interviews.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Interview } from '../../models';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements AfterViewInit {
  /** List of columns for which data is required to be displayed. */
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'interview', label: 'Interview' },
    { column: 'interviewer', label: 'Interviewer' },
    { column: 'date', label: 'Date' },
    { column: 'result', label: 'Result' }
  ];

  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);

  dataSource: MatTableDataSource<Interview>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Initializes the table data source and on change of interview data
   * populate it to the table. In case no data is received clear the previous
   * data. Also on change of data navigate back to the first page.
   */
  constructor(readonly interviewsService: InterviewsService) {
    this.dataSource = new MatTableDataSource();
    interviewsService.interviews.subscribe(data => {
      if (data && data.length) {
        this.dataSource.data = data;
      } else {
        this.dataSource.data = [];
      }
      if (this.paginator) {
        this.paginator.firstPage();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
