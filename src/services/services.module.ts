import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShortListingService } from './short-listing.service';
import { PostedJobsService } from './posted-jobs.service';
import { InterviewsService } from './interviews.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ShortListingService, PostedJobsService, InterviewsService],
})
export class ServicesModule { }
