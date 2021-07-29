import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss'],
})
export class PizzaAddComponent implements OnInit {
  @Output() pizzaNew = new EventEmitter<Pizza>();
  nombre: string = '';
  ingredientes: string = '';
  precio: string = '';
  peso: string = '';
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  PizzaAdd() {
    let p = new Pizza();
    if (this.nombre != '' && this.ingredientes != '') {
      let auxPrecio: number = parseFloat(this.precio);
      let auxPeso: number = parseFloat(this.peso);
      if (auxPeso >= 500 && auxPeso <= 1000) {
        if (auxPrecio > 0) {
          p.nombre = this.nombre;
          p.ingredientes = this.ingredientes;
          p.peso = auxPeso;
          p.precio = auxPrecio;
          this.Limpiar();
          this.pizzaNew.emit(p);
        }else {
          this.toastr.error('Verifique precio.', 'PRECIO NO VALIDO.', {
            timeOut: 5000,
          });
        }
      } else {
        this.toastr.error('Peso valido 500gr a 1000gr.', 'PESO NO VALIDO.', {
          timeOut: 5000,
        });
      }
    } else {
      this.toastr.error('Verifique datos ingresados.', 'DATOS NO VALIDOS.', {
        timeOut: 5000,
      });
    }
  }

  Limpiar(){
    this.nombre = '';
    this.ingredientes = '';
    this.peso = '';
    this.precio = '';
  }
}
