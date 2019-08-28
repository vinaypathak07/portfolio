import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaveUserService } from 'src/app/shared/save-user.service';
import { DialogData, User } from 'src/app/models/users';
import { EmailValidationService } from 'src/app/shared/email-validation.service';


@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.css']
})
export class DownloadDialogComponent implements OnInit {

  name = '';
  emailExists = false;
  user: User[] =  [];
  downloadForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<DownloadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private save: SaveUserService,
              private emailValidation: EmailValidationService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.downloadForm = new FormGroup({
      userName : new FormControl(null, Validators.required),
      userEmail : new FormControl(null, Validators.required)
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.downloadForm.value);
    this.user.push(this.downloadForm.value);
    console.log(this.user);
    this.save.storeUser(this.user)
          .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
    );
    this.emailValidation.verifyEmail(this.downloadForm.value.userEmail)
          .subscribe(
            (response: any) => {
              this.emailExists = response.smtp_check;
              if (!this.emailExists) {
                this.openSnackBar({message: 'Email not valid!', action: 'OK', duration: 3000});
              }
            },
            (error) => console.log(error)
          );
    this.dialogRef.close();
  }

  openSnackBar(event) {
    this._snackBar.open(event.message, event.action, {
      duration: event.duration,
    });
  }
}

