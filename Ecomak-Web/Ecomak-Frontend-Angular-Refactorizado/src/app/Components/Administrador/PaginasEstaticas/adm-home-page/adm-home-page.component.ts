import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdmConfirmDialogComponent } from '../adm-confirm-dialog/adm-confirm-dialog.component';
import { Dialog } from 'src/app/Models/Dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { User } from 'src/app/Models/User';
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
