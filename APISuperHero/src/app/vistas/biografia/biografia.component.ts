import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {

  hero:string

  heroName:string
  heroFullName:string
  heroAlterEgo:string
  heroAliases:string
  heroPBirth:string
  heroFAppearance:string
  heroPublisher:string
  heroAlignment:string
  heroImage:string

  heroID:any

  constructor(private apiService:ApiService, private router:Router, private activeRouter:ActivatedRoute){ }


  ngOnInit(): void {
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.apiService.getHero(this.heroID).subscribe((data:any) => {
      console.log(data)
      this.heroImage = data.image.url
      this.heroName = data.name
      //this.heroFullName = data.biography.full-name
      //this.heroAlterEgo = data.biography.alter-egos
      this.heroAliases = data.biography.aliases
      //this.heroPBirth = data.biography.place-of-birth
      //this.heroFAppearance= data.biography.first-appearance
      this.heroPublisher = data.biography.publisher
      this.heroAlignment = data.biography.alignment
    })
  }

  Stats(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.router.navigate(['nivel-poder', this.heroID]);
  }
  conexiones(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.router.navigate(['conexiones-familia', this.heroID]);
  }
}
