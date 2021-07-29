import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/models/pizza';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.scss']
})
export class PizzaDeleteComponent implements OnInit {

  @Input() pizzaSelect: Pizza = new Pizza();
  constructor(private firebase: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  PizzaDelete(p: any){
    if(p.nombre != ''){
      this.firebase.Delete_Pizza(p).then( resolve => {
        this.pizzaSelect = new Pizza();
        this.toastr.success('Pizza eliminada correctamente.', 'EXITO!', {
          timeOut: 5000,
        });
      }).catch( error => {
        this.toastr.error('Intente nuevamente.', 'ALGO SALIÓ MAL.', {
          timeOut: 5000,
        });
      });
    }else{
      this.toastr.error('Verifique antes de eliminar.', 'ALGO SALIÓ MAL.', {
        timeOut: 5000,
      });
    }
  }
}
