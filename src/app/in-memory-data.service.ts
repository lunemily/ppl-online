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
          "Yoshua",
          "Yakumo",
          "Red",
          "Barnum",
          "Lionheart",
          "Patrick Pinkerton",
          "Muckfoot",
          "Aurethious",
          "Mr Pizza",
        ],
        emblems: [
          "Kellan",
          "Rune",
          "Aiden",
          "Cryo",
        ],
        champions: [
          "Eleanora",
          "scoot",
        ]
      },
      { id: 12,
        name: 'rhonder',
        badges: [
          "Rosy",
          "Yakumo",
          "Emmett",
          "Yoshua",
          "Lionheart",
          "Sakurai",
          "Brick Tamland",
          "Virgil",
          "Patrick Pinkerton",
        ],
        emblems: [
          "Rune",
          "Aiden",
          "Cryo",
          "Akira",
        ],
        champions: [
          "scoot",
        ]
      },
      { id: 13,
        name: 'toastdeib',
        badges: [
          "Muckfoot",
          "Red",
          "Sakurai",
          "Brick Tamland",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 14,
        name: 'erkenhelm',
        badges: [
          "Virgil",
          "Barnum",
          "TohruChu",
          "Patrick Pinkerton",
          "Aurethious",
          "Simple Kenny",
          "Mr Pizza",
          "Emmett",
        ],
        emblems: [
          "Rhonder",
          "Kellan",
          "Rune",
          "Aiden",
          "Cryo",
          "Akira",
        ],
        champions: [
          "scoot",
        ]
      },
      { id: 15,
        name: 'chartwig',
        badges: [
          "Simple Kenny",
          "Mr Pizza",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 16,
        name: 'ruppy',
        badges: [
          "Emmett",
          "Yoshua",
          "Tom Roe",
          "Lyra",
          "Muckfoot",
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