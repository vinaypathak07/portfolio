import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'header-presenter',
  templateUrl: './header-presenter.component.html',
  styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent implements OnInit {

  sideBarOpened = false;
  isSticky = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

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
    let host = document.getElementById('toolbar');
    this.isSticky = window.pageYOffset > host.offsetTop ? true : false;
    // console.log(this.isSticky);
    // console.log("scrolling..." + event);
  }
}
