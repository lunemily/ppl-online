import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Challenger } from './challenger';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const challengers = [
      { id: 11, name: 'cometpenguin', badges: ["test_badge"], emblems: ["test_emblem"], champions: ["test_champion"] },
      { id: 12, name: 'rhonder', badges: [], emblems: [], champions: [] },
      { id: 13, name: 'toastdeib', badges: [], emblems: [], champions: [] },
      { id: 14, name: 'erkenhelm', badges: [], emblems: [], champions: [] },
      { id: 15, name: 'chartwig', badges: [], emblems: [], champions: [] },
      { id: 16, name: 'ruppy', badges: [], emblems: [], champions: [] },
    ];
    return {challengers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(challengers: Challenger[]): number {
    return challengers.length > 0 ? Math.max(...challengers.map(challenger => challenger.id)) + 1 : 11;
  }
}