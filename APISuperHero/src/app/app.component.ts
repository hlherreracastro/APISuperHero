import { ApiService } from './servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'APISuperHero';
  hero:string
  heroIDImage:string
  heroIDName:string
  heroPIntell:string

  constructor(private apiService:ApiService ,public auth: AuthService ){ }

  ngOnInit(): void{}

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout();
  }

  search(){
    this.apiService.getHero(this.hero).subscribe((data:any) => {
      console.log(data)
      this.heroIDImage = data.image.url
      this.heroIDName = data.name
      this.heroPIntell = data.powerstats.intelligence
    })
  }
}
