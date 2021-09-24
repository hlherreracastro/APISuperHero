import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conexiones-familia',
  templateUrl: './conexiones-familia.component.html',
  styleUrls: ['./conexiones-familia.component.css']
})
export class ConexionesFamiliaComponent implements OnInit {

  heroName:string

  heroImage:string
  heroGAffiliation:string
  heroRelatives:string
  heroWork:string
  heroBase:string

  heroID:any

  constructor(private apiService:ApiService, private router:Router, private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.apiService.getHero(this.heroID).subscribe((data:any) => {
      console.log(data)
      this.heroName = data.name
      this.heroImage = data.image.url
      //this.heroGAffiliation = data.conections.group-affiliation
      this.heroRelatives = data.connections.relatives
      this.heroWork = data.work.occupation
      this.heroBase = data.work.base
  })
}


  biografia(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.router.navigate(['biografia', this.heroID]);
  }

  Stats(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.router.navigate(['nivel-poder', this.heroID]);
  }
}
