import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  GetUser(github:string){
//https://api.github.com/users/octaviovillegas
    return this.http.get(github);
  }
}
