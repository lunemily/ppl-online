import { Component, OnInit, Input } from '@angular/core';
import { Challenger } from '../challenger';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChallengerService } from '../challenger.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-challenger-detail',
  templateUrl: './challenger-detail.component.html',
  styleUrls: ['./challenger-detail.component.css']
})
export class ChallengerDetailComponent implements OnInit {

  @Input() challenger: Challenger;

  constructor(
    private route: ActivatedRoute,
    private challengerService: ChallengerService,
    private headerService: HeaderService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getChallenger();
    this.headerService.setUrl(window.location.href);
  }

  getChallenger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.challengerService.getChallenger(id)
      .subscribe(challenger => this.challenger = challenger);
  }

  goBack(): void {
    this.location.back();
  }

}
