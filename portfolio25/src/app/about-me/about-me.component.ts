import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { trigger,state,style,transition,animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(0)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),

      transition('small <=> large', animate('500ms ease-in')),
    ]),
    trigger('myAnimationButton', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(0)',
      })),

      transition('small <=> large', animate('500ms ease-in')),
    ]),
    trigger('slideAnimation', [
      state('large', style({
        transform: 'translate3d(0, 71%, 0)',
      })),
      state('small', style({
        transform: 'translate3d(0, 0, 0)',
      })),

      transition('small <=> large', animate('300ms ease-in-out')),
    ]),
    trigger('footerAnimation', [
      state('large', style({
        transform: 'translate3d(0, 15.875rem, 0)',
      })),
      state('small', style({
        transform: 'translate3d(0, 0, 0)',
      })),

      transition('small <=> large', animate('300ms ease-in-out')),
    ]),
  ]
})
export class AboutMeComponent implements OnInit {
  state: String = 'small';
  showexperianDetails: Boolean = false;
  shownoyoDetails: Boolean = false;
  showweshapeDetails: Boolean = false;
  showimsperformance: Boolean = false;
  showibmredbooks: Boolean = false;
  showhobbies: Boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });

  }

  animate() {
    this.state  = (this.state === 'small' ? 'large' : 'small');
  }

  carpentry(): void {
    this._router.navigate(['/carpentry']);
  }

  showHobbies(): void {
    this.showhobbies = this.showhobbies ? false : true;
  }

  showWeshapeDetails(): void {
    this.showweshapeDetails = this.showweshapeDetails ? false : true;
  }

  showNoyoDetails(): void {
    this.shownoyoDetails = this.shownoyoDetails ? false : true;
  }

  showExperianDetails(): void {
    this.showexperianDetails = this.showexperianDetails ? false : true;
  }

  showIBMRedbooks(): void {
    this.showibmredbooks = this.showibmredbooks ? false : true;
  }

  showIMSPerformance(): void {
    this.showimsperformance = this.showimsperformance ? false : true;
  }

}
