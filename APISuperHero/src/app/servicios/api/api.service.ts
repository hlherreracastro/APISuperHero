import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://www.superheroapi.com/api.php/10165526508105574/';

  //inyeccion de dependencias
  constructor( private http: HttpClient) { }

  getHero(hero:string){
    return this.http.get(`${this.url}/${hero}`)
  }
  }


