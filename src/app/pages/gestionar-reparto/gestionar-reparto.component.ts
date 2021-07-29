import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Repartidor } from 'src/app/models/repartidor';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-gestionar-reparto',
  templateUrl: './gestionar-reparto.component.html',
  styleUrls: ['./gestionar-reparto.component.scss']
})
export class GestionarRepartoComponent implements OnInit {
  listaRepartidoresFirebase: Observable<any[]> | undefined;
  listaRepartidores: any = [];
  listaPizzasFirebase: Observable<any[]> | undefined;
  listaPizzas: any[] = [];

  //CARGO LO QUE BORRO DE LA LISTA
  armadoPedido: any[] = [];

  logueado: boolean = false;
  admin:boolean = false;

  repartidor: Repartidor = new Repartidor();
  pizzaNew: number = 0;
  constructor(private firebase: FirebaseService, private context: AngularFireDatabase, private toastr: ToastrService) { }

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

    this.GetPizzas();
  }

  GetRepartidor(event:any){
    this.repartidor = event;
  }

  Agregar(p: any){
    if(this.pizzaNew <= this.repartidor.capacidadDeTransporte){
      let index = this.listaPizzas.indexOf(p);
      this.listaPizzas.splice(index, 1);
      this.pizzaNew++;

      this.armadoPedido.push(p);
    }else{
        this.toastr.error('Excede capacidad de transporte.', 'ALGO SALIÓ MAL!', {
          timeOut: 5000,
        });
    }
  }

  GetPizzas(){
    this.listaPizzasFirebase = this.context.list('pizzas').valueChanges();
    this.listaPizzasFirebase.subscribe(
      (response) => {
        //GUARDO TODAS LAS PIZZAS
        this.listaPizzas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Limpiar(): void {
    this.pizzaNew = 0;
    this.armadoPedido = [];
    if(true){
      this.GetPizzas();
    }
  }
}
