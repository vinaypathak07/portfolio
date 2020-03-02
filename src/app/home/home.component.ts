import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
