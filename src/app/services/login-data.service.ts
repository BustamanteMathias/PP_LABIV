import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  email:string = '';
  paass:string = '';
  perfil:string= '';

  constructor() { }
}
