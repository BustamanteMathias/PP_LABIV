import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-repartidor-gestion',
  templateUrl: './detalle-repartidor-gestion.component.html',
  styleUrls: ['./detalle-repartidor-gestion.component.scss'],
})
export class DetalleRepartidorGestionComponent implements OnInit {
  @Input() repartidor: Repartidor = new Repartidor();
  @Input() pizza: number = 0;
  @Input() pedido: any[] = [];
  @Output() limpiar = new EventEmitter<boolean>();
  constructor(
    private firebase: FirebaseService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  Confirmar() {
    if (this.pedido.length > 0) {
      if (this.pizza <= this.repartidor.capacidadDeTransporte) {
        this.pedido.forEach((p) => {
          this.firebase.Delete_Pizza(p);

          this.toastr.success('Pedido confirmado!', 'EXITO!', {
            timeOut: 5000,
          });
        });
      } else {
        this.toastr.error('Verifique cantidad de pizzas.', 'EXCESO DE PIZZAS', {
          timeOut: 5000,
        });
      }
      this.Limpiar();
    } else {
      this.toastr.error('Verifique cantidad de pizzas.', 'NO HAY PEDIDOS', {
        timeOut: 5000,
      });
    }
  }

  Limpiar() {
    this.pizza = 0;
    this.pedido = [];
    this.limpiar.emit(true);
  }
}
