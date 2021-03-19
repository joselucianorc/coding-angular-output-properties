import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({valor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({valor: this.valor});
  }
}
