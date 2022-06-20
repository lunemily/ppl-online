import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Challenger } from '../model/challenger';
import { ChallengerService } from '../service/challenger.service';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  challengers: Challenger[];

  constructor(
    private route: ActivatedRoute,
    private challengerService: ChallengerService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    if (!!!this.route.snapshot.queryParams.id) {
      this.getChallengers();
    }
    this.headerService.setUrl(window.location.href);
  }

  getChallengers(): void {
    this.challengerService
      .getChallengers()
      .subscribe((challengers) => (this.challengers = challengers));
  }
}
