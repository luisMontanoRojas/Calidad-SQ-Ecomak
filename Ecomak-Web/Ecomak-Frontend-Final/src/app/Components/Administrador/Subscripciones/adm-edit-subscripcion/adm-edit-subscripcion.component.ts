import { Component, OnInit, Inject } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-edit-subscripcion',
  templateUrl: './adm-edit-subscripcion.component.html',
  styleUrls: ['./adm-edit-subscripcion.component.css']
})
export class AdmEditSubscripcionComponent implements OnInit {
  form: FormGroup;
  subscribeEdit: Subscribe = new Subscribe;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private subscribeservice: SubscribeService, public dialogRef: MatDialogRef<AdmEditSubscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public subscribe: Subscribe, private _snackBar: MatSnackBar) { 
    }

  ngOnInit() {
    this.subscribeEdit.id = this.subscribe.id;
    this.subscribeEdit.name = this.subscribe.name;
    this.subscribeEdit.company = this.subscribe.company;
    this.subscribeEdit.email = this.subscribe.email;
    this.subscribeEdit.phone = this.subscribe.phone;
    this.subscribeEdit.message = this.subscribe.message;
    this.form = this.fb.group({
      subsName: ['', Validators.required],
      subsEmail: ['', Validators.email],
      subsPhone: ['', Validators.required],
      subsMessage: ['', Validators.required],
      company: ['', Validators.nullValidator]
    })
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmitEdit() {
    if ((this.subscribeEdit.name) && (this.subscribeEdit.phone) && (this.subscribeEdit.email)) {
      this.subscribeservice.editSubscribe(this.subscribeEdit).subscribe(s => {
        this.dialogRef.close({ data: s });
        this.openSnackBar("Editado Correctamente!!", "Aceptar");
      }, err => {
        console.log(err);
        this.openSnackBar("Error Al Editar", "Aceptar");
      });
    }
    else {
      this.openSnackBar("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
