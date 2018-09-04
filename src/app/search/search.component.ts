import { SearchParams } from './../../models';
import { PostedJobsService } from './../../services/posted-jobs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  /** Wether to display open job postings or not. */
  jobOpened = false;

  /** Wether to display closed job postings or not. */
  jobClosed = false;

  /** Title which should be matched with all the available job postings. */
  title = '';

  constructor(private readonly postedJobsService: PostedJobsService) { }

  /** Displays the list of posted jobs based on the user search selection. */
  searchJobs() {
    const title = this.title.trim();
    const searchParams: SearchParams = {
      jobStatusClose: this.jobClosed,
      jobStatusOpen: this.jobOpened,
      title: title ? title : null
    };
    this.postedJobsService.getPostedJobs(searchParams);
  }
}
