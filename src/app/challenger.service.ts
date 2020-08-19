import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Challenger } from './challenger';
import { CHALLENGERS } from './mock-challengers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {
  
  getChallengers(): Observable<Challenger[]> {
    this.messageService.add('ChallengerService: fetched challengers');
    return of(CHALLENGERS);
  }

  getChallenger(id: number): Observable<Challenger> {
    // TODO: send the message _after_ fetching the challenger
    this.messageService.add(`ChallengerService: fetched challenger id=${id}`);
    return of(CHALLENGERS.find(challenger => challenger.id === id));
  }

  constructor(private messageService: MessageService) { }
}
