import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  Stats(){
    this.router.navigate(['nivel-poder']);
  }

  Family(){
    this.router.navigate(['conexiones-familia']);
  }

}
