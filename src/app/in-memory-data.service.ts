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
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
        ],
        emblems: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
        ],
        champions: [
          "1",
          "2",
        ]
      },
      { id: 12,
        name: 'rhonder',
        badges: [
          "1",
          "13",
          "3",
          "14",
          "5",
          "6",
          "2",
          "8",
        ],
        emblems: [
          "1",
          "2",
          "5",
          "4",
        ],
        champions: [
          "2",
        ]
      },
      { id: 13,
        name: 'toastdeib',
        badges: [
          "1",
          "13",
          "6",
          "2",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 14,
        name: 'erkenhelm',
        badges: [
          "1",
          "13",
          "3",
          "14",
          "15",
          "6",
          "12",
          "8",
          "9",
        ],
        emblems: [
          "3",
          "1",
          "2",
          "5",
          "6",
        ],
        champions: [
          "2",
        ]
      },
      { id: 15,
        name: 'chartwig',
        badges: [
          "4",
          "17",
        ],
        emblems: [
        ],
        champions: [
        ]
      },
      { id: 16,
        name: 'ruppy',
        badges: [
          "4",
          "12",
          "9",
          "17",
          "11",
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