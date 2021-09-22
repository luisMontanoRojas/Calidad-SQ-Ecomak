import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-adm-home-page',
  templateUrl: './adm-home-page.component.html',
  styleUrls: ['./adm-home-page.component.css']
})
export class AdmHomePageComponent implements OnInit {
  currentUser: User;
  constructor(public dialog: MatDialog, private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/admin/Login']);
  }
  ngOnInit() {
  }

}
