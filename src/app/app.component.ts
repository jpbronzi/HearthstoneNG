import { Component } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { Hero } from './hero-class/hero-class';
import { HeroService } from './hero-class/hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Hearthstone Tournament';
  player1= [] = [
    {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
    ];
 player2= [] = [
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
     {
    name: '',
    image: '',},
  ];
  heroes: Hero [];
  selectedHero: Hero;
  

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getPlayers(): void{}
  ngOnInit(): void {
    this.getHeroes();
  }
  setHero1(selected, game){
 this.player1[game].name = selected.name; 
 this.player1[game].image = selected.image;
  };
  setHero2(selected, game){
 this.player2[game].name = selected.name; 
 this.player2[game].image = selected.image;
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

 }

