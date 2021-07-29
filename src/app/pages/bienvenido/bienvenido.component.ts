import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss'],
})
export class BienvenidoComponent implements OnInit {
  obs_GitHub: Observable<any> = new Observable();
  UserGitHub: any = [];

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
    let userName: string = 'https://api.github.com/users/BustamanteMathias';

    this.obs_GitHub = this.githubService.GetUser(userName);
    this.obs_GitHub.subscribe((gitInfo) => {
      this.UserGitHub = gitInfo;
    });
  }

  Navegar(path: string) {
    this.router.navigate([path]);
  }
}
