import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BrodcastRecognizedVoiceService } from 'src/app/shared/brodcast-recognized-voice.service';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {

  constructor(public dialog: MatDialog, private broadcastService: BrodcastRecognizedVoiceService, private _snackbar: MatSnackBar) {
    this.broadcastService.recognizedVoice.subscribe((result: string) => {
      if ( result.toLowerCase() === 'download resume') {
        this.openDialog();
      }
    });
   }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DownloadDialogComponent, {
      width: '400px',
      height: '400px',
      autoFocus: true,
      data: { myName: 'Vinay Pathak' },
      panelClass: 'myClass'
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log('Returned From dialog' + result);
      });
  }
}
