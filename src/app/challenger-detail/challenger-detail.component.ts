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
    "Aurethious",
    "Simple Kenny",
    "Mr Pizza",
    "Emmett",
    "Yoshua",
    "Tom Roe",
    "Lyra",
    "Muckfoot",
    "Red",
  ];

  veteranLeaders: String[] = [
    "Rosy",
    "Yakumo",
    "Lionheart",
    "Sakurai",
    "Brick Tamland",
    "Virgil",
    "Barnum",
    "TohruChu",
    "Patrick Pinkerton",
    "Capt Rusty",
  ];

  elites: String[] = [
    "Rhonder",
    "Kellan",
    "Rune",
    "Aiden",
    "Cryo",
    "Akira",
  ];

  champions: String[] = [
    "Eleanora",
    "scoot",
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
