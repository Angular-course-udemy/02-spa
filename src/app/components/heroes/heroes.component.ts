import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private heroService : HeroesService, private router : Router) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
  showHero(id:number){
    this.router.navigate(['/hero', id])
  }
}