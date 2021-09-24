import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nivel-poder',
  templateUrl: './nivel-poder.component.html',
  styleUrls: ['./nivel-poder.component.css']
})
export class NivelPoderComponent implements OnInit {

  hero:string

  heroName:string
  heroImage:string
  heroIntelligence:string
  heroStrength:string
  heroSpeed:string
  heroDurability:string
  heroPower:string
  heroCombat:string

  heroGender:string
  heroRace:string
  heroHeight:string
  heroWeight:string
  heroHairColor:string
  heroEyeColor:string

  heroID:any

  constructor(private apiService:ApiService, private router:Router, private activeRouter:ActivatedRoute){ }

  ngOnInit(): void {
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.apiService.getHero(this.heroID).subscribe((data:any) => {
      console.log(data)
      this.heroImage = data.image.url
      this.heroName = data.name
      this.heroIntelligence = data.powerstats.intelligence
      this.heroPower = data.powerstats.power
      this.heroSpeed = data.powerstats.power
      this.heroDurability = data.powerstats.durability
      this.heroStrength = data.powerstats.strength
      this.heroCombat = data.powerstats.combat

      this.heroGender = data.appearance.gender
      this.heroRace = data.appearance.race
      this.heroHeight = data.appearance.height
      this.heroWeight = data.appearance.weight
      //this.heroEyeColor = data.appearance.eye-color
      //this.heroHairColor = data.appearance.hair-color
    })
  }

  biografia(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    //console.log(this.heroID)
    this.router.navigate(['biografia', this.heroID]);
  }

  conexiones(){
    this.heroID = this.activeRouter.snapshot.paramMap.get('hero');
    this.router.navigate(['conexiones-familia', this.heroID]);
  }
}
