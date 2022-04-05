import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(public deleteStudentDialogRef: MatDialogRef<DeleteUserComponent>) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.deleteStudentDialogRef.close();
  }

}
