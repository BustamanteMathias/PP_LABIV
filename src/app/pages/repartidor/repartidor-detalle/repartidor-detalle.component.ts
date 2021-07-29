import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Repartidor } from 'src/app/models/repartidor';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.scss']
})
export class RepartidorDetalleComponent implements OnInit {

  listaRepartidoresFirebase: Observable<any[]> | undefined;
  listaRepartidores: any = [];
  paisData: Observable<any> | undefined;
  paisDataInput: any = '';
  logueado: boolean = false;
  admin:boolean = false;

  repartidor: Repartidor = new Repartidor();

  constructor(private firebase: FirebaseService,
    private context: AngularFireDatabase, private pais: PaisesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.logueado = this.firebase.logueado;
    this.admin = this.firebase.admin;

    this.listaRepartidoresFirebase = this.context.list('repartidores').valueChanges();
    this.listaRepartidoresFirebase.subscribe(
      (response) => {
        //GUARDO TODOS LOS REPARTIDORES
        this.listaRepartidores = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  GetRepartidor(event:any){
    this.repartidor = event;
    this.paisData = this.pais.GetPais(this.repartidor.pais);
    this.paisData.subscribe( response => {
      this.paisDataInput = response;
    });
  }
}
