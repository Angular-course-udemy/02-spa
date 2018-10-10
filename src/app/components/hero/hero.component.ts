import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  hero:any = {};

  constructor( private heroService : HeroesService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this.heroService.getHero(params['id']);
      console.log(this.hero)
    })
  }

  ngOnInit() {
  }

}
