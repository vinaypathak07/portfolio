import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPresenterComponent } from './footer-presenter.component';

describe('FooterPresenterComponent', () => {
  let component: FooterPresenterComponent;
  let fixture: ComponentFixture<FooterPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
