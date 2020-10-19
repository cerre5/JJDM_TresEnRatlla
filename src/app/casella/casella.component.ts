import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella',
  template: `
  <button nbButton *ngIf="!value">{{ value }}</button>
  <button *ngIf="value == 'X'">{{ value }}</button>
  <button *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class CasellaComponent {

  @Input() value: 'X' | 'O';

}
