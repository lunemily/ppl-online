import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'PPL \'20 Online Challenger Board';

  constructor() { }

  ngOnInit(): void {
  }

}
