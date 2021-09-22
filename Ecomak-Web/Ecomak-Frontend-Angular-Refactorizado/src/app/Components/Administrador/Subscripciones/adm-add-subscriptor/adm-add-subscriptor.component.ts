import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material'
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-adm-add-subscriptor',
  templateUrl: './adm-add-subscriptor.component.html',
  styleUrls: ['./adm-add-subscriptor.component.css']
})
export class AdmAddSubscriptorComponent implements OnInit {

  name: string;
  company: string;
  email: string;
  phone: number;
  message: string;
  c: Subscribe = new Subscribe;

  constructor(public dialog: MatDialog, private SuscribeService: SubscribeService, public dialogRef: MatDialogRef<AdmAddSubscriptorComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    if ((this.name) && (this.phone)) {
      this.c.name = this.name;
      this.c.company = this.company;
      this.c.email = this.email;
      this.c.phone = this.phone;
      this.c.message = this.message;

      this.SuscribeService.Subscribeadd(this.c).subscribe(s => {
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

  onCancelar(): void {
    this.dialogRef.close();
  }

}
