import { InterviewsService } from './../../services/interviews.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ShortListedCandidate } from '../../models';
import { ShortListingService } from '../../services/short-listing.service';

@Component({
  selector: 'app-short-listed',
  templateUrl: './short-listed.component.html',
  styleUrls: ['./short-listed.component.scss']
})
export class ShortListedComponent implements AfterViewInit {
  /** List of columns for which data is required to be displayed. */
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'name', label: 'Name' },
    { column: 'worksAt', label: 'Works At' },
    { column: 'experience', label: 'Experience' },
    { column: 'ctc', label: 'CTC' }
  ];

  /** Currently selected short listed candidate id. */
  selectedId: number;

  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);

  dataSource: MatTableDataSource<ShortListedCandidate>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Initializes the table data source and on change of short listed candidates
   * data populate it to the table. In case no data is received clear the
   * previous data. Also on change of data navigate back to the first page.
   */
  constructor(
    readonly shortListingService: ShortListingService,
    private readonly interviewsService: InterviewsService) {
    this.dataSource = new MatTableDataSource();
    shortListingService.shortListedCandidate.subscribe(data => {
      if (data && data.length) {
        this.dataSource.data = data;
        this.selectedId = data[0].id;
        interviewsService.getInterviews(this.selectedId);
      } else {
        this.dataSource.data = [];
        interviewsService.clearInterviews();
      }
      if (this.paginator) {
        this.paginator.firstPage();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Displays the list of interviews held by the candidates in-case any of the
   * short listed candidate is selected by the user.
   */
  setSelectedCandidate(candidate: ShortListedCandidate) {
    this.interviewsService.getInterviews(candidate.id);
    this.selectedId = candidate.id;
  }
}
