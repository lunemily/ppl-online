import { Component, OnInit, Input } from '@angular/core';
import { Badge } from '../../model/badge';

@Component({
  selector: 'app-leader-item',
  templateUrl: './leader-item.component.html',
  styleUrls: ['./leader-item.component.css'],
})
export class LeaderItemComponent implements OnInit {
  @Input() leader: Badge;

  constructor() {}

  ngOnInit(): void {
    console.log(this.leader.type);
  }
}
