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
      transition('normal => hightlited', animate(1000)),
      transition('hightlited => normal', animate(1000))
    ])
  ]
})
export class AppComponent {

  state = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

  onAnimate() {
    this.state = this.state === 'normal' ? 'hightlited': 'normal';
  }
}
