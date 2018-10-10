import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  heroArr:Heroe[] = [];
  searchWord:string;

  constructor(private heroService : HeroesService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.searchWord = params['word'];
      this.heroArr = this.heroService.searchForHero(params['word']);
      console.log(this.heroArr)
    })
  }
  
  showHero(id:number){
    this.router.navigate(['/hero', id])
  }

}


