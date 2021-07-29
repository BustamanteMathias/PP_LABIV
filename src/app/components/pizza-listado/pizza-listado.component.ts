import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-pizza-listado',
  templateUrl: './pizza-listado.component.html',
  styleUrls: ['./pizza-listado.component.scss']
})
export class PizzaListadoComponent implements OnInit {
  @Input() pizzasListado: Pizza[] = [];
  @Output() pizzaSelect = new EventEmitter<Pizza>();
  constructor() { }

  ngOnInit(): void {
  }

  PizzaSelect(p: any){
    this.pizzaSelect.emit(p);
  }
}
