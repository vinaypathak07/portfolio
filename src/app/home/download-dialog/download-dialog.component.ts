import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaveUserService } from 'src/app/shared/save-user.service';
import { DialogData, User } from 'src/app/models/users';
import { EmailValidationService } from 'src/app/shared/email-validation.service';
import { DownloadPdfService } from 'src/app/shared/download-pdf.service';
import * as FileSaver from 'file-saver';
import { SendMailService } from 'src/app/shared/send-mail.service';


@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.css']
})
export class DownloadDialogComponent implements OnInit {

  name = '';
  emailExists = false;
  user: User[] = [];
  downloadForm: FormGroup;
  // pdfUrl = 'http://drive.google.com/uc?export=download&id=1r372wVBVpyj0eT-GpaeJM6ht-wwQvEM4';
  pdfUrl = 'assets/Vinay_Pathak_Resume.pdf';
  constructor(public dialogRef: MatDialogRef<DownloadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private save: SaveUserService,
              private emailValidation: EmailValidationService,
              private _snackBar: MatSnackBar, private downloadService: DownloadPdfService,
              private sendMailService: SendMailService) { }

  ngOnInit() {
    this.downloadForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required)
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
            this.openSnackBar({ message: 'Email not valid!', action: 'OK', duration: 3000 });
          } else {
            this.downloadFile();
            this.sendMail();
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

  downloadFile() {
    this.downloadService.downloadPdf(this.pdfUrl).subscribe(
      (res) => {
        FileSaver.saveAs(res, 'Vinay_Pathak_Resume.pdf');
      }
    );
  }

  sendMail() {
    this.sendMailService.send(this.downloadForm.value)
      .subscribe(
        (response) => console.log('mail sent'),
        (error) => console.log(error)
      );
  }
}
