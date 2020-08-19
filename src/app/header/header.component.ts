import { Component, OnInit, Input } from '@angular/core';
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
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard,
  ) { }

  ngOnInit(): void { }

  openSnackBar() {
    this.clipboard.copy(this.headerService.url);
    this._snackBar.open("URL copied to clipboard!", "Dismiss", {
      duration: 2000,
    });
  }
}
