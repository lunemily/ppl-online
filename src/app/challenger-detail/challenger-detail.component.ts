import { Component, OnInit, Input } from '@angular/core';
import { Challenger } from '../challenger';

@Component({
  selector: 'app-challenger-detail',
  templateUrl: './challenger-detail.component.html',
  styleUrls: ['./challenger-detail.component.css']
})
export class ChallengerDetailComponent implements OnInit {

  @Input() challenger: Challenger;

  constructor() { }

  ngOnInit(): void {
  }

}
