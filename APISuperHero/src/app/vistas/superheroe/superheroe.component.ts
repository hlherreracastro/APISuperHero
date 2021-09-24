import { Hero } from './../../models/Hero';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent implements OnInit {

  hero:string

  constructor(private router:Router){ }

  ngOnInit(): void{
  }

  biography(hero:string){
    console.log(this.hero)
    this.router.navigate(['biografia',hero]);
  }

}

