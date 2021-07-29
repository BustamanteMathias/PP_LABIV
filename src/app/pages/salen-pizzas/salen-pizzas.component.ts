import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.scss']
})
export class SalenPizzasComponent implements OnInit {
  listaPizzasFirebase: Observable<any[]> | undefined;
  listaPizzas: any = [];

  logueado: boolean = false;
  admin:boolean = false;

  pizzaPick: Pizza = new Pizza();
  constructor(private firebase: FirebaseService, private context: AngularFireDatabase, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.logueado = this.firebase.logueado;
    this.admin = this.firebase.admin;

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

  addPizza(p: any){
    this.pizzaPick = p;
    this.firebase.Insert_Pizza(p).then( response => {
      this.toastr.success('Pizza cargada correctamente.', 'EXITO!', {
        timeOut: 5000,
      });
    }).catch( error => {
      console.log(error);
      this.toastr.error('Intente nuevamente.', 'ALGO SALIÓ MAL.', {
        timeOut: 5000,
      });
    });
  }

  PizzaPick(p: Pizza){
    this.pizzaPick = p;
  }
}
