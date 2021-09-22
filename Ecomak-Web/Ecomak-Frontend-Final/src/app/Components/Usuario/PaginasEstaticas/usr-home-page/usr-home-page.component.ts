import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UsrDialogImageComponent } from '../usr-dialog-image/usr-dialog-image.component';

@Component({
  selector: 'app-usr-home-page',
  templateUrl: './usr-home-page.component.html',
  styleUrls: ['./usr-home-page.component.css']
})
export class UsrHomePageComponent implements OnInit {
  data = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.data = [
      { "title": "Bolsa Para Fiesta", "img2": "../../../../../assets/Home Page/BOLSAPARABOTELLAS-ARRUCHADA.png" },
      { "title": "Bolsa Publicitaria", "img2": "../../../../../assets/Home Page/BOLSAPARABOTELLAS.png" },
      { "title": "Bolsa para Concientizar", "img2": "../../../../../assets/Home Page/BOLSAPLANA.png" },
    ]
    }
  openDialog(i:any): void {

    const dialogRef = this.dialog.open(UsrDialogImageComponent, {
      height: 'auto',
      width: 'auto', data:i 
    });
  }
}
