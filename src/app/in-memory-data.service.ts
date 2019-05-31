import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '鲁班' },
      { id: 12, name: '王昭君' },
      { id: 13, name: '后羿' },
      { id: 14, name: '庄周' },
      { id: 15, name: '甄姬' },
      { id: 16, name: '妲己' },
      { id: 17, name: '程咬金' },
      { id: 18, name: '恺' },
      { id: 19, name: '亚瑟' },
      { id: 20, name: '蔡文姬' }
    ];
    return {heroes};
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}