import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  obs_GitHub:Observable<any> = new Observable();
  infoGitHub:any = [];

  constructor(private _gitHub:GithubService, private router:Router) { }

  ngOnInit(): void {
    this.obs_GitHub = this._gitHub.GetUser('https://api.github.com/users/octaviovillegas');
    this.obs_GitHub.subscribe( gitInfo => {
      this.infoGitHub = gitInfo;
      console.log(this.infoGitHub);
    });
  }

  Login(){
    this.router.navigate(['login']);
  }

}
