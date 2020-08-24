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

  casualLeaders: String[] = [
    "235754020738695168",
    "193573529684410369",
    "109799203152121856",
    "180177605213814784",
    "305375865838239744",
    "184101500170141697",
    "234814727686062080",
    "273311518462836737",
    "192169923332538369",
  ];

  veteranLeaders: String[] = [
    "429744942345224192",
    "414424342395617281",
    "123251048797175808",
    "268233272138399754",
    "436625927519076352",
    "221279588997791744",
    "315398097218043905",
    "126537033685532672",
    "356256546646130692",
    "181442238864293889",
  ];

  elites: String[] = [
    "229338714336264192",
    "127202978586165248",
    "259658592573980673",
    "156540419180593153",
    "340559329000423424",
    "372623885201440768",
  ];

  champions: String[] = [
    "504917257491578880",
    "112662192523853824",
  ]

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
      .subscribe(challenger => this.challenger = this.shuffle(challenger));
  }

  shuffle(challenger: Challenger): Challenger {
    challenger.badges = this.shuffleArray(challenger.badges);
    challenger.emblems = this.shuffleArray(challenger.emblems);
    challenger.champions = this.shuffleArray(challenger.champions);
    return challenger;
  }

  // -> Fisher–Yates shuffle algorithm
  shuffleArray(array: string[]): string[] {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  goBack(): void {
    this.location.back();
  }

}
