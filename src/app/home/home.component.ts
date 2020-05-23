import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { SpeechRecognitionService } from '../shared/speech-recognition.service';
import { MatSnackBar } from '@angular/material';
import { BrodcastRecognizedVoiceService } from '../shared/brodcast-recognized-voice.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, fadeAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

  wait = false;

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ 'animation' ];
  }
// openSnackBar(event) {
//   // this._snackBar.open(event.message, event.action, {
//   //   duration: event.duration, verticalPosition: 'top', horizontalPosition: 'start'
//   // });
// }

}
