import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  listaPaises:any;

  constructor(private http:HttpClient) {
    this.listaPaises = this.GetPaises();
  }

  GetPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/region/europe');
  }
}
