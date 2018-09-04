import { FakeInterviewsService } from './../../test_utils/fake_interviews.service';
import { InterviewsService } from './../../services/interviews.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule, MatTableModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortListedComponent } from './short-listed.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShortListingService } from '../../services/short-listing.service';
import { FakeShortListedCandidatesService } from '../../test_utils/fake_short-listing.service';

describe('ShortListedComponent', () => {
  let component: ShortListedComponent;
  let fixture: ComponentFixture<ShortListedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule
      ],
      providers: [
        { provide: InterviewsService, useClass: FakeInterviewsService },
        {
          provide: ShortListingService,
          useClass: FakeShortListedCandidatesService
        }
      ],
      declarations: [ShortListedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
