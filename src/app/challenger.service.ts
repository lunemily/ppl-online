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

  constructor(private messageService: MessageService) { }
}
