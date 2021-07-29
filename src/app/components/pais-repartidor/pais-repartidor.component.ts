import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';

@Component({
  selector: 'app-pais-repartidor',
  templateUrl: './pais-repartidor.component.html',
  styleUrls: ['./pais-repartidor.component.scss']
})
export class PaisRepartidorComponent implements OnInit {

  @Input() dataPais: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
