import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  isCreating = false;
  maxChar = 200;
  emailRegEx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$';
  nameRegEx = '^(?! )[A-Za-z0-9 ]*(?<! )$';

  addStudentForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegEx)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegEx)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
    class: new FormControl('', [Validators.required]),
    rollNumber: new FormControl('')
  });

  constructor(public dialog: MatDialog, public addUserDialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { roleLength: number }) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.addUserDialogRef.close('cancel');
  }

  public addStudent() {

  }

}
