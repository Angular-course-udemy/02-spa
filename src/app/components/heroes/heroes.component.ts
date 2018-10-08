import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private heroService : HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}