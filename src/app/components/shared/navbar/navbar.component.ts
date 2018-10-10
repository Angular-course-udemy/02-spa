import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private heroService : HeroesService, private router : Router) { }

  ngOnInit() {
  }

  searchForHero(word:string) {
    this.router.navigate(['/search', word])
  }

}