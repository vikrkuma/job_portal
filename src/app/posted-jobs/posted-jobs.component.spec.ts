import { FakePostedJobsService } from './../../test_utils/fake_posted-jobs.service';
import { FakeShortListedCandidatesService } from './../../test_utils/fake_short-listing.service';
import { ShortListingService } from './../../services/short-listing.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedJobsComponent } from './posted-jobs.component';
import { PostedJobsService } from '../../services/posted-jobs.service';

describe('PostedJobsComponent', () => {
  let component: PostedJobsComponent;
  let fixture: ComponentFixture<PostedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule
      ],
      providers: [
        { provide: PostedJobsService, useClass: FakePostedJobsService },
        {
          provide: ShortListingService,
          useClass: FakeShortListedCandidatesService
        }
      ],
      declarations: [PostedJobsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
