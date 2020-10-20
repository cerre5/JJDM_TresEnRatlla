import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella',
  template: `
  <button [disabled]="false" nbButton *ngIf="!value">{{ value }}</button>
  <button [disabled]="false" *ngIf="value == 'X'">{{ value }}</button>
  <button [disabled]="false" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class CasellaComponent {

  @Input() value: 'X' | 'O';
  buttonDisabled: boolean = false;
}
