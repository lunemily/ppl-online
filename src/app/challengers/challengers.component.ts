import { Component, OnInit } from '@angular/core';
import { Challenger } from '../challenger';
import { ChallengerService } from '../challenger.service';

@Component({
  selector: 'app-challengers',
  templateUrl: './challengers.component.html',
  styleUrls: ['./challengers.component.css']
})
export class ChallengersComponent implements OnInit {
  challenger: Challenger = {
    id: 1,
    name: 'Windstorm'
  }

  challengers: Challenger[];

  selectedChallenger: Challenger;
  onSelect(challenger: Challenger): void {
    this.selectedChallenger = challenger;
  }

  getChallengers(): void {
    this.challengerService.getChallengers()
      .subscribe( challengers => this.challengers = challengers);
  }

  constructor(private challengerService: ChallengerService) { }

  ngOnInit(): void {
    this.getChallengers();
  }

}
