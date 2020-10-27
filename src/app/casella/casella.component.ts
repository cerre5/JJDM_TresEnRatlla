import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella',
  template: `
  <button [disabled]="buttonDisabled" nbButton *ngIf="!value">{{ value }}</button>
  <button [disabled]="buttonDisabled || value" *ngIf="value">{{ value }}</button>
  
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; } button:disabled { background: white; color: black; border: none; }'
  ]
})
export class CasellaComponent {

  @Input() value: 'X' | 'O';
  @Input() buttonDisabled: boolean;

  /* setButtonDisabled(){
    this.buttonDisabled = true;
  } */

}




