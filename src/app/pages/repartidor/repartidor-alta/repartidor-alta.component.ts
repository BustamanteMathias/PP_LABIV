import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Repartidor } from 'src/app/models/repartidor';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-repartidor-alta',
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.scss'],
})
export class RepartidorAltaComponent implements OnInit {
  logueado: boolean = false;
  admin: boolean = false;

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.logueado = this.firebase.logueado;
    this.admin = this.firebase.admin;
  }

  _transportePropio: boolean = false;
  _nombre: string = '';
  _dni: number = 0;
  _edad: number = 0;
  _pais: string = '';
  _capacidadDeTransporte: number = 0;

  Cambio(event: any) {
    this._transportePropio = event.target.value;
  }

  Event_GetPais(event: any) {
    this._pais = event;
  }

  Aceptar() {
    let r = new Repartidor();
    if (this._nombre != '' && this._pais != '') {
      if (
        !isNaN(this._dni) &&
        !isNaN(this._edad) &&
        !isNaN(this._capacidadDeTransporte)
      ) {
        if (
          this._edad > 0 &&
          this._dni > 0 &&
          this._capacidadDeTransporte > 0
        ) {
          if (this._dni > 999999) {
            r.capacidadDeTransporte = this._capacidadDeTransporte;
            r.dni = this._dni;
            r.edad = this._edad;
            r.nombre = this._nombre;
            r.pais = this._pais;
            r.transportePropio = this._transportePropio;

            this.firebase.Insert_Repartidor(r).then((resolve) => {
              this.toastr.success('Repartidor dado de alta.', 'EXITO!', {
                timeOut: 5000,
              });
            });

            this._transportePropio = false;
            this._nombre = '';
            this._dni = 0;
            this._edad = 0;
            this._pais = '';
            this._capacidadDeTransporte = 0;
          }else {
            this.toastr.error(
              'Verifique datos e intente nuevamente.',
              'ALGO SALIÓ MAL!',
              {
                timeOut: 5000,
              }
            );
          }
        }else {
          this.toastr.error(
            'Verifique datos e intente nuevamente.',
            'ALGO SALIÓ MAL!',
            {
              timeOut: 5000,
            }
          );
        }
      }else {
        this.toastr.error(
          'Verifique datos e intente nuevamente.',
          'ALGO SALIÓ MAL!',
          {
            timeOut: 5000,
          }
        );
      }
    } else {
      this.toastr.error(
        'Verifique datos e intente nuevamente.',
        'ALGO SALIÓ MAL!',
        {
          timeOut: 5000,
        }
      );
    }
  }

  Cancelar() {
    this.router.navigate(['']);
  }
}
