import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'header-presenter',
  templateUrl: './header-presenter.component.html',
  styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent implements OnInit {

  sideBarOpened = false;
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
  if (this.sideBarOpened && event.target.innerWidth >= 774) {
      this.toggleSidebar();
  }
  }
}
