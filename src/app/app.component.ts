import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('hightlited', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> hightlited', animate(1000)),

    ]),

    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('hightlited', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => hightlited', animate(1000)),
      transition('hightlited => normal', animate(500)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(500, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),


    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),

      transition('void => *', [
        style({
          opacity: 0,
        transform: 'translateX(-100px)'
        }),
        animate(1000)
      ]),

      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ]),
    ]),

  ]
})
export class AppComponent {

  state = 'normal';
  wildState = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

  onAnimate() {
    this.state = this.state === 'normal' ? 'hightlited': 'normal';
    this.wildState = this.wildState === 'normal' ? 'hightlited': 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

}
