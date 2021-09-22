import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Product } from 'src/app/Models/Product';
import { Quote } from 'src/app/Models/Quote';
import { QuoteService } from 'src/app/Services/quote.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-usr-pasos-cotizaciones',
  templateUrl: './usr-pasos-cotizaciones.component.html',
  styleUrls: ['./usr-pasos-cotizaciones.component.css']
})
export class UsrPasosCotizacionesComponent implements OnInit {

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
  Quantity: number;

  selectedColor: string;

  current: string;

  cotizacion: Quote;

  public response: { 'dbPath': '' };

  public progress: number;
  public message: string;

  constructor(public dialogRef: MatDialogRef<UsrPasosCotizacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private quoteService: QuoteService, private _snackBar: MatSnackBar) {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.cotizacion = new Quote;
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
        this.cotizacion.QuoteColor = this.current;
        this.cotizacion.Quantity = this.Quantity;
        this.cotizacion.ProductId = this.product.id;
        
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
    this.cotizacion.QuoteColor = this.selectedColor;
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
      })
    }

  clickExit() {
    this.dialogRef.close();
  }

  setColors() {
    this.a.push({ color: "Negro", codigo: "#000000" });
    this.a.push({ color: "Plomo", codigo: "#808080" });
    this.a.push({ color: "Azul_Marino", codigo: "#000033" });
    this.a.push({ color: "Rojo", codigo: "#FF0000" });
    this.a.push({ color: "Naranja", codigo: "#FF8000" });
    this.a.push({ color: "Amarillo", codigo: "#FFFF00" });
    this.a.push({ color: "Vino", codigo: "#990000" })
    this.a.push({ color: "Lila", codigo: "#CC00CC" });
    this.a.push({ color: "Rosado_Pastel", codigo: "#FF9999" });
    this.a.push({ color: "Fucsia", codigo: "#FF007F" });
    this.a.push({ color: "Blanco", codigo: "#FFFFFF" });
    this.a.push({ color: "Celeste", codigo: "#66FFFF" });
    this.a.push({ color: "Azul_Pastel", codigo: "#66B2FF" });
    this.a.push({ color: "Cafe", codigo: "#663300" });
    this.a.push({ color: "Beige", codigo: "#666600" });
    this.a.push({ color: "Verde_Oscuro", codigo: "#009900" });
    this.a.push({ color: "Verde_Claro", codigo: "#80FF00" });
    this.a.push({ color: "Verde_Botella", codigo: "#00994C" });
  }

}
