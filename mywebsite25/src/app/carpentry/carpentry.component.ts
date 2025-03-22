import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-carpentry',
  templateUrl: './carpentry.component.html',
  styleUrls: ['./carpentry.component.css'],
  animations: [
    trigger('treehouseAnimation', [
      state('menu', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      state('treehouse', style({ opacity: 1 
        // transform: 'scale(1)',
      })),
      state('beds', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      state('entertainment', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      // state('hiddenOut', style({ opacity: 0 })),
      // state('visable', style({ opacity: 1 })),

      transition('treehouse <=> menu', animate('800ms ease-in-out')),
      transition('treehouse <=> beds', animate('800ms ease-in-out')),
      transition('treehouse <=> entertainment', animate('800ms ease-in-out')),
    ]),
    trigger('entertainmentAnimation', [
      state('menu', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      state('treehouse', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      state('beds', style({ opacity: 0 
        // transform: 'scale(0)',
      })),
      state('entertainment', style({ opacity: 1 
        // transform: 'scale(1)',
      })),

      transition('entertainment <=> menu', animate('800ms ease-in-out')),
      transition('entertainment <=> beds', animate('800ms ease-in-out')),
      transition('entertainment <=> treehouse', animate('800ms ease-in-out')),
    ]),
    trigger('bedsAnimation', [
      state('menu', style({ opacity: 0 
      })),
      state('treehouse', style({ opacity: 0 
      })),
      state('beds', style({ opacity: 1 
      })),
      state('entertainment', style({ opacity: 0
      })),

      transition('beds <=> menu', animate('800ms ease-in-out')),
      transition('beds <=> entertainment', animate('800ms ease-in-out')),
      transition('beds <=> treehouse', animate('800ms ease-in-out')),
    ]),
    trigger('menuAnimation', [
      state('menu', style({ 
        transform: 'scale(1)',
      })),
      state('treehouse', style({ 
        transform: 'scale(0)',
      })),
      state('beds', style({ 
        transform: 'scale(0)',
      })),
      state('entertainment', style({ 
        transform: 'scale(0)',
      })),
      state('menuOff', style({ 
        transform: 'scale(0)', 
      })),

      transition('beds <=> menu', animate('800ms ease-in-out')),
      transition('menu <=> entertainment', animate('800ms ease-in-out')),
      transition('menu <=> treehouse', animate('800ms ease-in-out')),
      transition('menu <=> menuOff', animate('800ms ease-in-out')),
    ])
  ]
})
export class CarpentryComponent implements OnInit {
  state: string = 'treehouse';

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  animateTreehouse(){
    this.state = (this.state === 'menu' ? 'treehouse' : this.state === 'beds' ? 'treehouse' : this.state === 'entertainment' ? 'treehouse' : 'treehouse');
  }

  animateEntertainmentCenter(){
    this.state = (this.state === 'menu' ? 'entertainment' : this.state === 'beds' ? 'entertainment' : this.state === 'treehouse' ? 'entertainment' : 'entertainment');
  }

  animateBeds(){
    this.state = (this.state === 'menu' ? 'beds' : this.state === 'treehouse' ? 'beds' : this.state === 'entertainment' ? 'beds' : 'beds');
  }

  animateMenu(){
    this.state = (this.state === 'beds' ? 'menu' : this.state === 'treehouse' ? 'menu' : this.state === 'entertainment' ? 'menu' : 'treehouse');
  }

  home():void{
    this._router.navigate(['/']);
  }

  gaming():void{
    this._router.navigate(['/games']);
  }

  parenting():void{
    this._router.navigate(['/parenting']);
  }

}
