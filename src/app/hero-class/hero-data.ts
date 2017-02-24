import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-class';

export const Heroes: Hero[] = [
 { 
    id: 1,
    class: "Warrior",
    image: './assets/Hearthstone-Heroes/Garrosh_Hellscream.png',
    name: "Garrosh Hellscream"},
  {
    id: 2,
    class: "Hunter",
    image: "./assets/Hearthstone-Heroes/Rexxar.png",
    name: "Rexar",
  },
  {
    id: 3,
    class: "Priest",
    image: "./assets/Hearthstone-Heroes/Anduin_Wrynn.png",
    name: "Anduin Wrynn"
  },
  {
    id: 4,
    class: "Druid",
    image: "./assets/Hearthstone-Heroes/Malfurion_Stormrage.png",
    name: "Malfurion Stormrage"
  },
   {
    id: 5,
    class: "Mage",
    image: "./assets/Hearthstone-Heroes/Jaina_Proudmoore.png",
    name: "Jaina Proudmoore"
  },
   {
    id: 6,
    class:"Shaman",
    image: "./assets/Hearthstone-Heroes/Thrall.png",
    name: "Thrall"
  },
   {
    id: 7,
    class: "Warlock",
    image: "./assets/Hearthstone-Heroes/Gul'dan.png",
    name: "Gul'dan"
  },
   {
    id: 8,
    class: "Rogue",
    image: "./assets/Hearthstone-Heroes/Valeera_Sanguinar.png",
    name: "Valeera Sanguinar"
  },
   {
    id: 9,
    class: "Paladin",
    image: "./assets/Hearthstone-Heroes/Uther_Lightbringer.png",
    name: "Uther Lightbringer"
  },
]

@Component({
  selector: 'app-hero-class',
})
export class HeroClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
