import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(.1)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),

      transition('small <=> large', animate('700ms ease-in')),
    ]),
  ]
})
export class ResumeComponent implements OnInit {
  state: string = 'large';

  constructor(private _router: Router) { }

  ngOnInit() {
    // this.animate();
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  animate(){
    this.state  = (this.state === 'small' ? 'large' : 'small');
  }
}
