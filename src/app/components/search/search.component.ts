import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  heroArr:Heroe[] = [];
  searchWord:string;

  constructor( private heroService : HeroesService, private activatedRoute : ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.searchWord = params['word'];
      this.heroArr = this.heroService.searchForHero(params['word']);
    })
  }

}


