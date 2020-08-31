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

  casualLeaders: Badge[] = [
    {
      id: "235754020738695168",
      name: "Aurethious, the Emerald Knight",
      badgeName: "Emerald Badge"
    },
    {
      id: "193573529684410369",
      name: "Simple Kenny, the Berry Farmer",
      badgeName: "Berry Badge"
    },
    {
      id: "109799203152121856",
      name: "Mr Pizza, the PokéChef",
      badgeName: "Culinary Badge"
    },
    {
      id: "180177605213814784",
      name: "Emmett, the Special",
      badgeName: "Piece of Resistance Badge"
    },
    {
      id: "305375865838239744",
      name: "Yoshua, the Birdwatcher",
      badgeName: "Plume Badge"
    },
    {
      id: "184101500170141697",
      name: "Tom Roe, Candela's Firewall",
      badgeName: "Valiant Badge"
    },
    {
      id: "234814727686062080",
      name: "Lyra, the Monster Rider",
      badgeName: "Kinship Badge"
    },
    {
      id: "273311518462836737",
      name: "Muckfoot, the Marsh Druid",
      badgeName: "Swamp Lantern Badge"
    },
    {
      id: "192169923332538369",
      name: "Red, the Twitch User",
      badgeName: "Helix Badge"
    }
  ];

  veteranLeaders: Badge[] = [
    {
      id: "429744942345224192",
      name: "Rosy, the Rabbit Wrangler",
      badgeName: "Bunny Badge"
    },
    {
      id: "414424342395617281",
      name: "Yakumo, Narrator of Horrors",
      badgeName: "Occult Badge"
    },
    {
      id: "123251048797175808",
      name: "Lionheart, the Master Magi",
      badgeName: "Master Magi Badge"
    },
    {
      id: "268233272138399754",
      name: "Sakurai, the Mechanical Tactician",
      badgeName: "Mechanical Badge"
    },
    {
      id: "436625927519076352",
      name: "Brick Tamland, the Nutty Meterologist",
      badgeName: "Forecast Badge"
    },
    {
      id: "221279588997791744",
      name: "Virgil, The Haunted Guide",
      badgeName: "Possessed Badge"
    },
    {
      id: "315398097218043905",
      name: "Barnum, the Fossil Hunter",
      badgeName: "Fossil Badge"
    },
    {
      id: "126537033685532672",
      name: "TohruChu, Head of Dragon Maid Manor",
      badgeName: "Hospitality Badge"
    },
    {
      id: "356256546646130692",
      name: "Patrick Pinkerton, the Pink Pokémon Promoter",
      badgeName: "Pink Badge"
    },
    {
      id: "181442238864293889",
      name: "Captain Rusty, the Seafaring Wanderer",
      badgeName: "Galleon Badge"
    }
  ];

  elites: Badge[] = [
    {
      id: "229338714336264192",
      name: "Rhonder, the Winter Warrior",
      badgeName: "Absolute Zero Emblem"
    },
    {
      id: "127202978586165248",
      name: "Kellan, the Twisted Alchemist",
      badgeName: "Caustic Emblem"
    },
    {
      id: "259658592573980673",
      name: "Rune, Your Local Cryptozoologist",
      badgeName: "Duality Emblem"
    },
    {
      id: "156540419180593153",
      name: "Aidan, The Draconic Master",
      badgeName: "Darting Dragon Dance Emblem"
    },
    {
      id: "340559329000423424",
      name: "Cryo, Twister of the Elements",
      badgeName: "Floe Emblem"
    },
    {
      id: "372623885201440768",
      name: "Akira, The Kaiju Enthusiast",
      badgeName: "Titan Emblem"
    }
  ];

  champions: Badge[] = [
    {
      id: "504917257491578880",
      name: "Eleanora, the Exquisite Entomologist",
      badgeName: "Collector Emblem"
    },
    {
      id: "112662192523853824",
      name: "Scoot, the Woolly Gentleman",
      badgeName: "Stache Emblem"
    }
  ]

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
    // this.challenger = {"id": id, "name":"Test Account","badges":[]};
  }

  goBack(): void {
    this.location.back();
  }

}
