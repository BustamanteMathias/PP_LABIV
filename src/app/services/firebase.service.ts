import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from '../models/pizza';
import { Repartidor } from '../models/repartidor';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  logueado: boolean = false;
  admin: boolean = false;

  data:any = [];
  constructor(private AFauth: AngularFireAuth,
    private context: AngularFireDatabase,
    private router: Router,
    private toastr: ToastrService) {}

  ValidarIngreso(user: string, pass: string) {
    this.Login(user, pass);
  }

  Delete_Pizza(p: Pizza): Promise<void> {
    return this.context.list('pizzas').remove(p.nombre);
  }

  Update_Pizza(p: Pizza): Promise<void> {
    return this.context.list('pizzas').update(p.nombre, p);
  }

  Insert_Pizza(p: Pizza): Promise<void> {
    return this.context.list('pizzas').set(p.nombre, p);
  }

  Insert_Repartidor(r: Repartidor): Promise<void> {
    return this.context.list('repartidores').set(r.dni.toString(), r);
  }

  Login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(
        (response) => {
          this.logueado = true;
          if(email == 'admin@admin.com'){
            this.admin = true;
          }
          this.toastr.success('Bienvenido...', 'EXITO!', {
            timeOut: 2000,
          });
          this.router.navigate(['repartidor/alta']);
          resolve(response);
        },
        (error: any) => {
          switch (error.code) {
            case 'auth/user-not-found':
              this.toastr.error('El usuario no existe.', 'ERROR.', {
                timeOut: 5000,
              });
              rejected('El usuario no existe');
              break;
            case 'auth/invalid-email':
              this.toastr.error('Mail invalido.', 'ERROR.', {
                timeOut: 5000,
              });
              rejected('Mail invalido');
              break;
            case 'auth/wrong-password':
              this.toastr.error('Contraseña incorrecta.', 'ERROR.', {
                timeOut: 5000,
              });
              rejected('Contraseña incorrecta');
              break;
            default:
              rejected(error);
              break;
          }
        }
      );
    });
  }

  Register(email: string, password: string) {
    return new Promise<any>((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(
        (response: any) => {
          //this.EnviarMailDeVerificacion();
          this.router.navigate(['repartidor/alta']);
          resolve(response);
        },
        (error: any) => {
          switch (error.code) {
            case 'auth/weak-password':
              rejected('Contraseña corta');
              break;
            case 'auth/invalid-email':
              rejected('Mail invalido');
              break;
            case 'auth/wrong-password':
              rejected('Contraseña invalida');
              break;
            case 'auth/email-already-in-use':
              rejected('Correo existente');
              break;
            default:
              rejected('ERROR' + error);
              break;
          }
        }
      );
    });
  }
}
