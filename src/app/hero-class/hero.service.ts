import { Hero } from './hero-class';
import { Heroes } from './hero-data';

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }
}