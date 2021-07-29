import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/models/pizza';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pizza-update',
  templateUrl: './pizza-update.component.html',
  styleUrls: ['./pizza-update.component.scss']
})
export class PizzaUpdateComponent implements OnInit {

  @Input() pizzaSelect: Pizza = new Pizza();
  constructor(private firebase: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  PizzaUpdate(p: any){
    if(p.nombre != ''){
      this.firebase.Update_Pizza(p).then( resolve => {
        this.pizzaSelect = new Pizza();
        this.toastr.success('Datos actualizados.', 'EXITO!', {
          timeOut: 5000,
        });
      }).catch( error => {
        this.toastr.error('Verifique datos e intente nuevamente.', 'ALGO SALIÓ MAL!', {
          timeOut: 5000,
        });
      });
    }else{
      this.toastr.error('Verifique datos e intente nuevamente.', 'ALGO SALIÓ MAL!', {
        timeOut: 5000,
      });
    }
  }

}
