import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  user: string = '';
  pass: string = '';

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  Continuar(){
    this.firebase.ValidarIngreso(this.user, this.pass);
  }

}
