import { Component, OnInit } from '@angular/core';
import { Challenger } from '../challenger';
import { ChallengerService } from '../challenger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  challengers: Challenger[] = [];

  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.getChallengers();
  }

  getChallengers(): void {
    this.challengerService.getChallengers()
      .subscribe(challengers => this.challengers = challengers.slice(1, 5));
  }
}