import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UsrDialogImageComponent } from '../PaginasEstaticas/usr-dialog-image/usr-dialog-image.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-productos-colores',
  templateUrl: './productos-colores.component.html',
  styleUrls: ['./productos-colores.component.css']
})
export class ProductosColoresComponent implements OnInit {
  data = [];
  Id;
  constructor(public dialog: MatDialog) {
    this.data = [
      { "title": "Verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-01.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-02.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-03.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-04.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-05.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-06.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-07.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-08.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-09.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-10.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-11.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-12.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-13.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-14.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-15.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-16.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-17.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-18.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-19.png" },
      { "title": "verde oscuro", "img": "../../../../../assets/Productos/ProductColors/COLORES TELAS-20.png" }
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
