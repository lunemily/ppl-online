import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Challenger } from './challenger';
import { CHALLENGERS } from './mock-challengers';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {
  
  getChallengers(): Observable<Challenger[]> {
    return of(CHALLENGERS);
  }

  constructor() { }
}
