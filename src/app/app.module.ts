import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortListedComponent } from './short-listed/short-listed.component';
import { InterviewsComponent } from './interviews/interviews.component';

import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PostedJobsComponent,
    ShortListedComponent,
    InterviewsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ServicesModule,
    FormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
