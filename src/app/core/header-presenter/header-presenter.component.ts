import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { SpeechRecognitionService } from '../../shared/speech-recognition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { BrodcastRecognizedVoiceService } from 'src/app/shared/brodcast-recognized-voice.service';

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
  recognizedWord = new Subject();

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private speechRecognitionService: SpeechRecognitionService, private router: Router,
    private route: ActivatedRoute, private _snackBar: MatSnackBar, private broadcastService: BrodcastRecognizedVoiceService) {
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

      // Listener
      (value) => {
        this.speechData = value.trim().split(' ');
        let activeRoute: string;
        this.speechData.forEach((str, index) => {
          if (str === 'open') {
            this.checkCount += 1;
            activeRoute = this.speechData[index + 1];
            if (activeRoute === 'skills' ||
              activeRoute === 'skill' ||
              activeRoute === 'projects' ||
              activeRoute === 'project' ||
              activeRoute === 'journey' ||
              activeRoute === 'contact' ||
              activeRoute === 'certificates' ||
              activeRoute === 'certificate' ||
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
          } else if ( str === 'download' ) {
              let next_word = this.speechData[index + 1];
              console.log(str);
              if ( next_word.toLowerCase() === 'resume') {
                  // this.recognizedWord.next(next_word);
                  console.log(next_word);
                  this.broadcastService.setRecognizedWord( str + ' ' + next_word);
              } else {
                this.broadcastService.setRecognizedWord(str);
              }
          } else if (str === 'cancel') {
            this.broadcastService.setRecognizedWord(str);
          } else if( str === 'name' || str === 'email')  {
            this.broadcastService.setRecognizedWord(str);
          } else {
            this.broadcastService.setRecognizedWord(str);
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

      // On Errror
      (err) => {
        console.log(err);
        if (err.error === 'no-speech') {
          // console.log('Restatring Service');
        }
      },

      // On Completion
      () => {
        this.listen = false;
        // console.log('Complete');
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
