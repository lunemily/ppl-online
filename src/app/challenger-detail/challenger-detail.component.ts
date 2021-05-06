import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Challenger } from '../challenger';
import { Badge } from '../badge';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChallengerService } from '../challenger.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-challenger-detail',
  templateUrl: './challenger-detail.component.html',
  styleUrls: ['./challenger-detail.component.css'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
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
    if(!!this.route.snapshot.queryParams.id) {
      this.getChallenger();
    }
    this.headerService.setUrl(window.location.href);
  }

  getChallenger(): void {
    const id = this.route.snapshot.queryParams.id;
    this.challengerService.getChallenger(id)
      .subscribe(challenger => this.challenger = challenger);
  }

  goBack(): void {
    this.location.back();
  }

}
