import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.scss']
})
export class DetalleRepartidorComponent implements OnInit {

  @Input() repartidor: Repartidor= new Repartidor();
  constructor() { }

  ngOnInit(): void {
  }

}
