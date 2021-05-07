import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {
  }

  readonly ISLOGGEDKEY = 'islogged';
  login:boolean = false;

  Login(){
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.login = true;
  }

  Logout(){
    localStorage.setItem(this.ISLOGGEDKEY, 'false');
    this.login = false;
  }

  isLoggedIn(){
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);

    if(this.login){
      return true;
    }else{
      return false;
    }
  }
}
