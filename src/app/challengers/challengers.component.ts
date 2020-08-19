import { Component, OnInit } from '@angular/core';
import { Challenger } from '../challenger';
import { ChallengerService } from '../challenger.service';

@Component({
  selector: 'app-challengers',
  templateUrl: './challengers.component.html',
  styleUrls: ['./challengers.component.css']
})
export class ChallengersComponent implements OnInit {

  challengers: Challenger[];

  constructor(private challengerService: ChallengerService) { }

  ngOnInit(): void {
    this.getChallengers();
  }

  getChallengers(): void {
    this.challengerService.getChallengers()
      .subscribe( challengers => this.challengers = challengers);
  }
}
