import { Component, OnInit, ViewChild } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { UserListModel } from '../constant/constants';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ELEMENT_DATA: UserListModel[] = [];
  USER_DATA: UserListModel[] = [];

  displayedColumns: string[] = ['select', 'firstName', 'lastName', 'class', 'rollNumber', 'action'];
  dataSource = new MatTableDataSource<UserListModel>(this.ELEMENT_DATA);
  selection = new SelectionModel<UserListModel>(true, []);
  users: string[] = [];
  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  isLoading = false;
  email = '';
  searchQuery = '';
  timeOut: any = null;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatAutocompleteTrigger) autoCompleteInput!: MatAutocompleteTrigger;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  /**
* for preparing filter list
*/
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.toLowerCase().includes(filterValue));
  }

  private getStudents() {
    let timeOutTime = 500;
    this.ELEMENT_DATA = this.userService.studentList;
    console.log("============", this.ELEMENT_DATA);
    this.USER_DATA = this.userService.studentList;
    this.dataSource = new MatTableDataSource<UserListModel>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, timeOutTime);
    this.isLoading = false;
  }

}
