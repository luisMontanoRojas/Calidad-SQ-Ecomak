import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Product } from 'src/app/Models/Product';
import { Quote } from 'src/app/Models/Quote';
import { QuoteService } from 'src/app/Services/quote.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-usr-pasos-cotizacion',
  templateUrl: './usr-pasos-cotizacion.component.html',
  styleUrls: ['./usr-pasos-cotizacion.component.css']
})
export class UsrPasosCotizacionComponent implements OnInit {
  
  a = [{ color: "", codigo: "" }];

  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  color: string;
  nameSub: string;
  emailSub: string;
  phonoSub: string;
  enterpriseSub: string;
  messageSub: string;
  Quantity= 100;

  selectedColor: string;

  current: string;

  cotizacion: Quote;

  public response: { 'dbPath': '-' };

  public progress: number;
  public message: string;

  constructor(public dialogRef: MatDialogRef<UsrPasosCotizacionComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any,
    private quoteService: QuoteService, private _snackBar: MatSnackBar, ) {
    this.cotizacion = new Quote;
    if (this.product['isProduct']) {
      this.cotizacion.ProductId = this.product['product'].id;
    }
    else {
      this.cotizacion.TRId = this.product['product'].idTr;
    }
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.a.splice(0, 1);
  }
  ngOnInit() {
    this.setColors();
  }
  setColor(colorr) {
    this.selectedColor = colorr.color;
    $(`#btn-${colorr.color}`).addClass("active");
    $(`#btn-${this.current}`).removeClass("active");
    this.current = colorr.color;
  }
  backOne() {
    this.stepOne = true;
    this.stepTwo = false;
  }
  onStepTwo() {
    if ((this.nameSub) && (this.phonoSub)) {
      this.stepOne = false;
      this.stepTwo = true;
      this.cotizacion.nameSub = this.nameSub;
      this.cotizacion.emailSub = this.emailSub;
      this.cotizacion.phonoSub = this.phonoSub;
      this.cotizacion.enterpriseSub = this.enterpriseSub;
      this.cotizacion.messageSub = this.messageSub;
    }
    else {
      this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
        duration: 2000,
      });
    }
  }
  backTwo() {
    this.stepTwo = true;
    this.stepThree = false;
  }
  onStepThree() {
    if (this.current) {
      if (this.Quantity) {
        this.stepTwo = false;
        this.stepThree = true;
        this.cotizacion.quoteColor = this.current;
        this.cotizacion.quantity = this.Quantity;
      }
      else {
        this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
          duration: 2000,
        });
      }
    }
    else {
      this._snackBar.open("Por Favor, ingrese un color disponible.", "Aceptar", {
        duration: 2000,
      });
    }
  }
  public uploadFinished = (event) => {
    this.response = event;
  }
  onFinalizar() {
    this.cotizacion.imagePath = this.response.dbPath;
    this.cotizacion.quoteColor = this.selectedColor;
    this.quoteService.addQuote(this.cotizacion).subscribe(
      result => {
        if (result) {
          this.cotizacion.id = result.id;
          this.dialogRef.close();
          this._snackBar.open("Cotizacion enviada con exito!", "Aceptar", {
            duration: 2000,
          });
        } else {
          this._snackBar.open("Por Favor, ingrese una image disponible.", "Aceptar", {
            duration: 2000,
          });
        }
      }, err => {
        console.log(err);
        this._snackBar.open("Error al cotizar", "Aceptar", {
          duration: 2000,
        });
      })
  }
  clickExit() {
    this.dialogRef.close();
  }
  setColors() {
    this.a.push({ color: "Blanco", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-01.png" });
    this.a.push({ color: "Negro", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-02.png" });
    this.a.push({ color: "Plomo", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-03.png" });
    this.a.push({ color: "Marfil", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-04.png" });
    this.a.push({ color: "Beige", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-05.png" });
    this.a.push({ color: "Cafe", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-06.png" });
    this.a.push({ color: "Naranja", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-07.png" })
    this.a.push({ color: "Amarillo", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-08.png" });
    this.a.push({ color: "Rojo", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-09.png" });
    this.a.push({ color: "Fucsia", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-10.png" });
    this.a.push({ color: "Rosa", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-11.png" });
    this.a.push({ color: "Lila", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-12.png" });
    this.a.push({ color: "Vino", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-13.png" });
    this.a.push({ color: "Verde_claro", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-14.png" });
    this.a.push({ color: "Verde_bandera", codigo:"../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-15.png" });
    this.a.push({ color: "Verde_botella", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-16.png" });
    this.a.push({ color: "Turquesa", codigo:"../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-17.png" });
    this.a.push({ color: "Celeste", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-18.png" });
    this.a.push({ color: "Azul_electrico", codigo:"../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-19.png" });
    this.a.push({ color: "Azul_marino", codigo: "../../../../../assets/Productos/ProductColors/coloresPequeños/tela 30x30px-20.png" });
  }

}


