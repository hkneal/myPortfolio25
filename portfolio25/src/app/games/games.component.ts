import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('hiddenIn', style({
        transform: 'scale(1)',
      })),
      state('hiddenOut', style({
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
export class GamesComponent implements OnInit {
  state: string = 'hiddenOut';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  animateIntro(){
    this.state = (this.state === 'visable' ? 'hiddenOut' : 'hiddenOut');
  }
  animateMenu(){
    this.state = (this.state === 'hiddenOut' ? 'hiddenIn' : 'hiddenOut');
  }

  home():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/']);
  }

  parenting():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/parenting']);
  }

  carpentry():void{
    this.state = 'hiddenOut';
    this._router.navigate(['/carpentry']);
  }

}
