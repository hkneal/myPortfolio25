import { Component, OnInit} from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-parenting',
  templateUrl: './parenting.component.html',
  styleUrls: ['./parenting.component.css'],
  animations: [
    trigger('introAnimation', [
      state('hiddenOut', style({ opacity: 0 })),
      state('visable', style({ opacity: 1 })),
      state('hiddenIn', style({ opacity: 0})),

      transition( 'visable => hiddenOut', animate('2500ms ease-in')),
    ]),
    trigger('menuAnimation', [
      state('hiddenIn', style({
        transform: 'scale(1)',
      })),
      state('hiddenOut', style({
        transform: 'scale(0)',
      })),
      state('visable', style({
        transform: 'scale(0)',
      })),

      transition('hiddenIn <=> hiddenOut', animate('400ms ease-in-out')),
    ]),
    trigger('imageFadeAnimation', [
      state('hiddenOut', style({ opacity: 1 })),
      state('hiddenIn', style({ opacity: .2 })),

      transition('hiddenIn <=> hiddenOut', animate('1000ms ease-in-out')),
    ]),
  ]
})
export class ParentingComponent implements OnInit{
  state: string = 'visable';

  constructor(private _router: Router) { 
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  ngOnInit() {
  }

  animateIntro(){
    this.state = (this.state === 'visable' ? 'hiddenOut' : this.state === 'hiddenIn' ? 'hiddenIn' : 'hiddenOut');
  }
  animateMenu(){
    this.state = (this.state === 'visable' ? 'hiddenIn' : this.state === 'hiddenIn' ? 'hiddenOut' : 'hiddenIn');
  }

  home():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/']);
  }

  gaming():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/games']);
  }

  carpentry():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/carpentry']);
  }

}
