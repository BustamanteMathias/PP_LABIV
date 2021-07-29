import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.scss']
})
export class ListadoRepartidorComponent implements OnInit {

  @Input() listaRepartidores: Repartidor[] = [];
  @Output() repartidorSelect = new EventEmitter<Repartidor>();

  constructor() { }

  ngOnInit(): void {
  }

  SelectRepartidor(r: any) {
    this.repartidorSelect.emit(r);
  }
}
