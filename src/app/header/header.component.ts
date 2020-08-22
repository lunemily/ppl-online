import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

import { HeaderService } from '../header.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "PPL \'20 Online";

  constructor(
    private router : Router,
    public headerService: HeaderService,
    private snackBar: MatSnackBar,
    private clipboard: Clipboard,
  ) { }

  ngOnInit(): void { }

  openChallenging() {
    window.open("assets/images/challenging.png");
  }

  openCopy() {
    this.clipboard.copy(this.headerService.url);
    this.snackBar.open("URL copied to clipboard!", "Dismiss", {
      duration: 2000,
    });
  }

  openRules() {
    window.open("assets/images/rules.png");
  }
}
