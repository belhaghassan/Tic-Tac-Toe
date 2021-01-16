import { Component, Input } from '@angular/core';

@Component({
  styleUrls: ["./square.component.scss"],
  selector: 'app-square',
  template: `
    <button nbButton hero [disabled]='onButton' status="basic" *ngIf="!value">{{ value }}</button>
    <button nbButton hero [disabled]='onButton' status="info" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero [disabled]='onButton' status="success" *ngIf="value == 'O'">{{ value }}</button>
  `
})

export class SquareComponent {

  @Input() onButton: true | false;
  @Input() value: 'X' | 'O';
  
}

