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
          "badge1",
          "badge2",
          "badge3",
          "badge4",
          "badge5",
          "badge6",
          "badge7",
          "badge8",
        ],
        emblems: [
          "emblem1",
          "emblem2",
          "emblem3",
          "emblem4",
        ],
        champions: [
          "champion1",
          "champion2",
        ]
      },
      { id: 12,
        name: 'rhonder',
        badges: [
          "badge1",
          "badge13",
          "badge3",
          "badge14",
          "badge5",
          "badge6",
          "badge2",
          "badge8",
        ],
        emblems: [
          "emblem1",
          "emblem2",
          "emblem5",
          "emblem4",
        ],
        champions: [
          "champion2",
        ]
      },
      { id: 13,
        name: 'toastdeib',
        badges: [
          "badge1",
          "badge13",
          "badge6",
          "badge2",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 14,
        name: 'erkenhelm',
        badges: [
          "badge1",
          "badge13",
          "badge3",
          "badge14",
          "badge15",
          "badge6",
          "badge12",
          "badge8",
        ],
        emblems: [
          "emblem1",
          "emblem2",
          "emblem5",
        ],
        champions: [
          "champion2",
        ]
      },
      { id: 15,
        name: 'chartwig',
        badges: [
          "badge4",
          "badge17",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 16,
        name: 'ruppy',
        badges: [
          "badge4",
          "badge12",
          "badge9",
          "badge17",
          "badge11",
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