import { FakeInterviewsService } from './../../test_utils/fake_interviews.service';
import { InterviewsService } from './../../services/interviews.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsComponent } from './interviews.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InterviewsComponent', () => {
  let component: InterviewsComponent;
  let fixture: ComponentFixture<InterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule
      ],
      providers: [
        { provide: InterviewsService, useClass: FakeInterviewsService }
      ],
      declarations: [InterviewsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
