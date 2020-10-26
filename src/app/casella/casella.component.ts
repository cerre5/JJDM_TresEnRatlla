import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella',
  template: `
  <button [disabled]="buttonDisabled" nbButton *ngIf="!value">{{ value }}</button>
  <button [disabled]="buttonDisabled" *ngIf="value == 'X'">{{ value }}</button>
  <button [disabled]="buttonDisabled" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class CasellaComponent {

  @Input() value: 'X' | 'O';
  @Input() buttonDisabled: boolean;

  /* setButtonDisabled(){
    this.buttonDisabled = true;
  } */

}




