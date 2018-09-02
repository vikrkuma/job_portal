import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ShortListedCandidates } from '../../models';

export function getMockedData(): ShortListedCandidates[] {
  const data: ShortListedCandidates[] = [];
  for (let i = 1; i < 101; i++) {
    const experience = parseInt(`${Math.random() * 10 + 1}`);
    data.push({
      name: `Name ${i}`,
      worksAt: `Company ${i}`,
      experience: `${experience} YRS`,
      ctc: `${(2.3869 * experience + Math.random() * 10).toFixed(2)}L`
    });
  }
  return data;
}

@Component({
  selector: 'app-short-listed',
  templateUrl: './short-listed.component.html',
  styleUrls: ['./short-listed.component.scss']
})
export class ShortListedComponent implements OnInit {
  dataColumns: Array<{ column: string, label: string }> = [
    { column: 'name', label: 'Name' },
    { column: 'worksAt', label: 'Works At' },
    { column: 'experience', label: 'Experience' },
    { column: 'ctc', label: 'CTC' }
  ];
  displayedColumns: string[] = this.dataColumns.map(({ column }) => column);
  dataSource: MatTableDataSource<ShortListedCandidates>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(getMockedData());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
