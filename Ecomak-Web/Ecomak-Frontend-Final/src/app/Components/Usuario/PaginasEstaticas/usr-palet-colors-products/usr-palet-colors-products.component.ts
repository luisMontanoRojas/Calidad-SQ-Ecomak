import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UsrDialogImageComponent } from '../usr-dialog-image/usr-dialog-image.component';

@Component({
  selector: 'app-usr-palet-colors-products',
  templateUrl: './usr-palet-colors-products.component.html',
  styleUrls: ['./usr-palet-colors-products.component.css']
})
export class UsrPaletColorsProductsComponent implements OnInit {

  data = [];
  constructor(public dialog: MatDialog) {
    this.data = [
      { "title": "Blanco", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-01.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-01.png" },
      { "title": "Negro", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-02.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-02.png" },
      { "title": "Plomo", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-03.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-03.png" },
      { "title": "Marfil", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-04.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-04.png" },
      { "title": "Beige", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-05.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-05.png" },
      { "title": "Cafe", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-06.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-06.png" },
      { "title": "Naranja", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-07.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-07.png" },
      { "title": "Amarillo", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-08.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-08.png" },
      { "title": "Rojo", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-09.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-09.png" },
      { "title": "Fucsia", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-10.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-10.png" },
      { "title": "Rosa", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-11.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-11.png" },
      { "title": "Lila", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-12.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-12.png" },
      { "title": "Vino", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-13.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-13.png" },
      { "title": "Verde claro", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-14.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-14.png" },
      { "title": "Verde bandera", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-15.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-15.png" },
      { "title": "Verde botella", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-16.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-16.png" },
      { "title": "Turquesa", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-17.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-17.png" },
      { "title": "Celeste", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-18.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-18.png" },
      { "title": "Azul electrico", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-19.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-19.png" },
      { "title": "Azul marino", "img": "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-20.png", "img2": "../../../../../assets/Productos/ProductColors/coloresGrandes/tela 350x350 px-20.png" }
    ]

  }

  ngOnInit() {

  }
  openDialog(i: any): void {

    const dialogRef = this.dialog.open(UsrDialogImageComponent, {
      height: 'auto',
      width: 'auto', data: i
    });
  }
}
