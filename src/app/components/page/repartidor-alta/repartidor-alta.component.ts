import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repartidor-alta',
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.scss']
})
export class RepartidorAltaComponent implements OnInit {
  constructor(private router: Router) { }

  _transportePropio:boolean = false;
  _nombre:string = '';
  _dni:number = 0;
  _edad:number = 0;
  _pais:string = '';
  _capacidadDeTransporte:number = 0;

  ngOnInit(): void {
  }

  Cambio(event:any){
    this._transportePropio = event.target.value;
  }

  Event_GetPais(event:any){
    this._pais = event;
  }

  Aceptar(){
    console.log('alta');
    this.router.navigate(['']);
  }


  Cancelar(){
    this.router.navigate(['']);
  }

}
