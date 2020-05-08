import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { SpeechRecognitionService } from '../../shared/speech-recognition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'header-presenter',
  templateUrl: './header-presenter.component.html',
  styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent implements OnInit {

  sideBarOpened = false;
  isSticky = true;
  listen = false;
  speechData;
  checkCount;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private speechRecognitionService: SpeechRecognitionService, private router: Router,
    private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.checkCount = 0;
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.toggleSidebarForMe.emit(this.sideBarOpened);
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    // console.log(event.target.innerWidth);
    if (this.sideBarOpened && event.target.innerWidth >= 930) {
      this.toggleSidebar();
    }
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(event) {
    const host = document.getElementById('toolbar');
    // this.isSticky = window.pageYOffset > host.offsetTop ? true : false;
    // console.log(this.isSticky);
    // console.log("scrolling..." + event);
  }

  onListening() {
    this.listen = !this.listen;
    this.speechRecognitionService.record().subscribe(
      // listener
      (value) => {
        this.speechData = value.trim().split(' ');
        let activeRoute: string;
        this.speechData.forEach((str, index) => {
          if (str === 'open') {
            this.checkCount += 1;
            activeRoute = this.speechData[index + 1];
            if (activeRoute === 'skills' ||
              activeRoute === 'projects' ||
              activeRoute === 'journey' ||
              activeRoute === 'contact' ||
              activeRoute === 'certificates' ||
              activeRoute === 'home') {
              this.checkCount += 1;
              if (activeRoute === 'journey') {
                activeRoute = this.speechData[index + 2];
                if (activeRoute === 'so') {
                  activeRoute = this.speechData[index + 3];
                  if (activeRoute === 'far') {
                    activeRoute = 'journey-so-far';
                  } else {
                    this.checkCount -= 1;
                  }
                } else {
                  this.checkCount -= 1;
                }
              }
            }
          }
        });
        console.log(this.checkCount);
        if (this.checkCount >= 2) {
          this.router.navigate([activeRoute], { relativeTo: this.route });
          this.checkCount = 0;
        } else {
          this.openSnackBar({ message: `Unable to navigate.Got ${this.speechData}.Try again.`, action: 'OK', duration: 5000 });
          this.checkCount = 0;
        }
      },
      // errror
      (err) => {
        console.log(err);
        if (err.error == 'no-speech') {
          console.log('--restatring service--');
          // this.activateSpeechSearchMovie();
        }
      },
      // completion
      () => {
        // this.showSearchButton = true;
        this.listen = false;
        console.log('--complete--');
        // this.activateSpeechSearchMovie();
      });
  }

  openSnackBar(event) {
    this._snackBar.open(event.message, event.action, {
      duration: event.duration, verticalPosition: 'top', horizontalPosition: 'start'
    });
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

}
