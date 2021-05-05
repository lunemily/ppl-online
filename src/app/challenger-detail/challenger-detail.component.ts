import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Challenger } from '../challenger';
import { Badge } from '../badge';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChallengerService } from '../challenger.service';
import { HeaderService } from '../header.service';

import * as data from '../leaders.json';

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

  // All pertinent leader information is stored in leaders.json
  casualLeaders: Badge[] = data.casualLeaders;
  veteranLeaders: Badge[] = data.veteranLeaders;
  elites: Badge[] = data.elites;
  champions: Badge[] = data.champions;

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
    // this.challenger = {
    //   "id": id,
    //   "name": "Erkenhelm",
    //   "badges": [
    //     "127202978586165248",
    //     "305375865838239744",
    //     "340559329000423424",
    //     "372623885201440768",
    //     "126537033685532672",
    //     "504917257491578880"
    //   ],
    //   "queueOpen": [
    //     "127202978586165248",
    //     "184101500170141697",
    //     "340559329000423424",
    //     "372623885201440768",
    //     "126537033685532672",
    //     "504917257491578880",
    //     "305375865838239744"
    //   ]
    // };
    this.sortLeaders();
  }

  sortLeaders(): void {
    /* We want the leaders sorted by availability. If their queue is open, they jump to the top of the list */
    this.casualLeaders.sort((a, b) => (this.challenger.queueOpen.indexOf(a.id) === -1) ? 1 : -1);
    this.veteranLeaders.sort((a, b) => (this.challenger.queueOpen.indexOf(a.id) === -1) ? 1 : -1);
    this.elites.sort((a, b) => (this.challenger.queueOpen.indexOf(a.id) === -1) ? 1 : -1);
    this.champions.sort((a, b) => (this.challenger.queueOpen.indexOf(a.id) === -1) ? 1 : -1);
  }

  goBack(): void {
    this.location.back();
  }

}
