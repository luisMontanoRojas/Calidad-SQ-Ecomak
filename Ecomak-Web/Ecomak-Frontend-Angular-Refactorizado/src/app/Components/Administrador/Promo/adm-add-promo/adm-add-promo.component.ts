import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material'
import { PromoService } from 'src/app/Services/promo.service';
import { Promo } from 'src/app/Models/Promo';
import * as $ from 'jquery';


@Component({
  selector: 'app-adm-add-promo',
  templateUrl: './adm-add-promo.component.html',
  styleUrls: ['./adm-add-promo.component.css']
})
export class AdmAddPromoComponent implements OnInit {

  tittle: string;
  description: string;
  iniDate: Date;
  endDate: Date;

  promo = new Promo;

  public response: { 'dbPath': '' };

  constructor(public dialog: MatDialog, private promoService: PromoService, public dialogRef: MatDialogRef<AdmAddPromoComponent>,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.tittle) {
      this.promo.tittle = this.tittle;
      this.promo.description = this.description;
      this.promo.iniDate = this.iniDate;
      this.promo.endDate = this.endDate;
      this.promo.image = this.response.dbPath;

      this.promoService.addPromo(this.promo).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Creado Correctamente!!", "Aceptar", {
          duration: 2000
        });
      }, err => {
        console.log(err);
        this._snackBar.open("Error Al Crear", "Aceptar", {
          duration: 2000,
        });
      });
    }
    else {
      this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
        duration: 2000,
      });
    }
  }

  uploadFinished = (event) => {
    this.response = event;
  }

}
