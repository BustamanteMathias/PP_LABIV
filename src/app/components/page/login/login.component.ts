import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoginDataService } from 'src/app/services/login-data.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msjErrorTitulo: string = 'Error ';
  msjErrorCorreo: string = 'Email no valido';
  msjErrorPass: string = 'Contraseña no valida';
  // CONTROLADORES COMPONENTES
  verCabecera: boolean = true;
  verLogin: boolean = true;
  verRegistrar: boolean = false;
  verRegPaciente: boolean = false;
  verRegProfesional: boolean = false;
  // VARIABLES DOM
  _correo: string = 'admin@admin';
  _pass: string = '1234';
  // CONTROLADORES ERRORES
  verErrorCorreo: boolean = false;
  verErrorPass: boolean = false;
  routerRedirect:any;
  constructor(
    //private toastr: ToastrService,
    private router:Router,
    private loginData:LoginDataService,
    private auth: AuthServiceService) { }

  ngOnInit(): void {
  }

  Ingresar() {
    this.verErrorPass = false;
    this.verErrorCorreo = false;
    this.routerRedirect = '';
    if (this._correo == '' || !this._correo.includes('@')) {
      //this.verErrorCorreo = true;
      //this.toastr.error('Error Pass', 'Verifique carga de datos.');
    } else {
      if (this._pass == '') {
        //this.verErrorPass = true;
        //this.toastr.error('Error Email', 'Verifique carga de datos.');
      } else {
        if((this._correo == 'admin@admin' && this._pass == '1234') || this._correo == 'empleado@empleado' && this._pass == '1234'){
          //this.toastr.success('Exito', 'Bienvenido!');
          this.loginData.email = this._correo;
          this.loginData.paass = this._pass;
          this.loginData.perfil= 'admin';
          this.router.navigate(['/repartidor/alta']);
        }
      }
    }
  }

}
