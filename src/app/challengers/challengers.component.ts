import { Component, OnInit } from '@angular/core';
import { Challenger } from '../challenger'

@Component({
  selector: 'app-challengers',
  templateUrl: './challengers.component.html',
  styleUrls: ['./challengers.component.css']
})
export class ChallengersComponent implements OnInit {
  challenger: Challenger = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
