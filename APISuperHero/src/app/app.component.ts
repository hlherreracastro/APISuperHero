import { ApiService } from './servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'APISuperHero'

  constructor(private apiService:ApiService ,public auth: AuthService ){ }

  ngOnInit(): void{}

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout();
  }
}
