import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { PostedJob } from '../../models';
import { PostedJobsService } from '../../services/posted-jobs.service';
import { ShortListingService } from '../../services/short-listing.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.scss']
})
export class PostedJobsComponent implements AfterViewInit {
  /** List of columns for which data is required to be displayed. */
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'company', label: 'Company' },
    { column: 'title', label: 'Title' },
    { column: 'datePosted', label: 'Date Posted' },
    { column: 'status', label: 'Status' }
  ];

  /** Currently selected job posting id. */
  selectedId: number;

  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);

  dataSource: MatTableDataSource<PostedJob>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Initializes the table data source and on change of posted jobs data
   * populate it to the table. In case no data is received clear the previous
   * data. Also on change of data navigate back to the first page.
   */
  constructor(
    readonly postedJobsService: PostedJobsService,
    private readonly shortListingService: ShortListingService) {
    this.dataSource = new MatTableDataSource();
    postedJobsService.postedJobs.subscribe(data => {
      if (data && data.length) {
        this.dataSource.data = data;
        this.selectedId = data[0].id;
        shortListingService.getShortListedCandidates(this.selectedId);
      } else {
        this.dataSource.data = [];
        shortListingService.clearShortListedCandidates();
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
   * Displays the list of short listed candidates in-case any of the posted job
   * is selected by the user.
   */
  setSelectedJobPosting(postedJob: PostedJob) {
    this.shortListingService.getShortListedCandidates(postedJob.id);
    this.selectedId = postedJob.id;
  }
}
