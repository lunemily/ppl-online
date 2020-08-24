import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Challenger } from './challenger';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const challengers = [
      { id: 11,
        name: 'cometpenguin',
        badges: [
          "305375865838239744",
          "414424342395617281",
          "192169923332538369",
          "315398097218043905",
          "123251048797175808",
          "356256546646130692",
          "273311518462836737",
          "235754020738695168",
          "109799203152121856",
        ],
        emblems: [
          "127202978586165248",
          "259658592573980673",
          "156540419180593153",
          "340559329000423424",
        ],
        champions: [
          "504917257491578880",
          "112662192523853824",
        ]
      },
      { id: 12,
        name: 'rhonder',
        badges: [
          "429744942345224192",
          "414424342395617281",
          "180177605213814784",
          "305375865838239744",
          "123251048797175808",
          "268233272138399754",
          "436625927519076352",
          "221279588997791744",
          "356256546646130692",
        ],
        emblems: [
          "259658592573980673",
          "156540419180593153",
          "340559329000423424",
          "372623885201440768",
        ],
        champions: [
          "112662192523853824",
        ]
      },
      { id: 13,
        name: 'toastdeib',
        badges: [
          "273311518462836737",
          "192169923332538369",
          "268233272138399754",
          "436625927519076352",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 14,
        name: 'erkenhelm',
        badges: [
          "221279588997791744",
          "315398097218043905",
          "126537033685532672",
          "356256546646130692",
          "235754020738695168",
          "193573529684410369",
          "109799203152121856",
          "180177605213814784",
        ],
        emblems: [
          "229338714336264192",
          "127202978586165248",
          "259658592573980673",
          "156540419180593153",
          "340559329000423424",
          "372623885201440768",
        ],
        champions: [
          "112662192523853824",
        ]
      },
      { id: 15,
        name: 'chartwig',
        badges: [
          "193573529684410369",
          "109799203152121856",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 16,
        name: 'ruppy',
        badges: [
          "180177605213814784",
          "305375865838239744",
          "184101500170141697",
          "234814727686062080",
          "273311518462836737",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 17,
        name: 'unlucky',
        badges: [
        ],
        emblems: [
        ],
        champions: [
        ]
      },
    ];
    return {challengers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(challengers: Challenger[]): number {
    return challengers.length > 0 ? Math.max(...challengers.map(challenger => challenger.id)) + 1 : 11;
  }
}