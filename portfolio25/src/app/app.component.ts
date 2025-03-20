import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { trigger,group,style,transition,animate,query, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('1 => 3', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('1 => 4', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('1 => 5', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('1 => 6', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('2 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('2 => 3', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('3 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('3 => 2', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('4 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('4 => 2', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('4 => 3', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('5 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('5 => 2', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('5 => 3', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('6 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('6 => 2', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ]),
      transition('6 => 3', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}) )]),
          query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}) )])
        ])
      ])
    ]),
    trigger('contactAnimation', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)',
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0,
      })),

      transition('in <=> out', animate('300ms ease-in-out')),
    ]),
  ]
})
export class AppComponent {
  title = 'My Portfolio';
  state: string = 'out';

  constructor() { }

  getDepth(outlet: { activatedRouteData: { [x: string]: any; }; }) {
    return outlet.activatedRouteData['depth'];
  }
  contactAnimate(){
    this.state  = (this.state === 'out' ? 'in' : 'out');
  }

}

