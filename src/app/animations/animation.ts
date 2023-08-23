import { animate, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    transition(':enter', [
      style({
        opacity: 0,
        backgroundColor: 'gray'
      }),
      animate(2000)
    ])
])