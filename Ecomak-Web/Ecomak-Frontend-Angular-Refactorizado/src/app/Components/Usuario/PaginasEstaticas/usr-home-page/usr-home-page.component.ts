import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MatDialog } from '@angular/material';
import { UsrDialogImageComponent } from '../usr-dialog-image/usr-dialog-image.component';

@Component({
  selector: 'app-usr-home-page',
  templateUrl: './usr-home-page.component.html',
  styleUrls: ['./usr-home-page.component.css']
})
export class UsrHomePageComponent implements OnInit {
  modalHeight: string;

  data:any;
  constructor(public dialog: MatDialog) {
    this.data = [
      { "title": "Bolsas para Fiestas", "img": "../../../../../assets/Home Page/BOLSAPARABOTELLAS ARRUCHADA.png" },
      { "title": "Bolsas Publicitarias", "img": "../../../../../assets/Home Page/BOLSAPARABOTELLAS.png" },
      { "title": "Bolsas para Concientizar", "img": "../../../../../assets/Home Page/BOLSAPLANA.png" }
    ]

    
   }

  ngOnInit() {
   
  }
  openDialog(i:any): void {

    const dialogRef = this.dialog.open(UsrDialogImageComponent, {
      height: 'auto',
      width: 'auto', data:i 
    });
  }

}
