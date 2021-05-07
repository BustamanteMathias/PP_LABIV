import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() OutputPais:EventEmitter<any> = new EventEmitter();

  obs_listaPaises:Observable<any> = new Observable();
  listaPaises:any = [];

  constructor(private _paises:PaisesService) {
  }

  ngOnInit(): void {
    this.obs_listaPaises = this._paises.GetPaises();
    this.obs_listaPaises.subscribe( paises => {
      this.listaPaises = paises;
    });
  }

  SeleccionPais(paisName:string){
    this.OutputPais.emit(paisName);
  }

}
