import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() estaLogueado:boolean = false;
  @Input() esAdmin:boolean = false;

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  Salir(){
    this.estaLogueado = this.firebase.logueado;
    this.esAdmin = this.firebase.admin;

    this.router.navigate(["bienvenido"]);
  }

  Navegar(path: string){
    this.router.navigate([path]);
  }
}
