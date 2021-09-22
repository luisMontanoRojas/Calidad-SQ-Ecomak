import { Component, OnInit } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-add-subscriptor',
  templateUrl: './adm-add-subscriptor.component.html',
  styleUrls: ['./adm-add-subscriptor.component.css']
})
export class AdmAddSubscriptorComponent implements OnInit {
  form: FormGroup;
  name: string;
  company: string;
  email: string;
  phone: number;
  message: string;
  c: Subscribe = new Subscribe;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private SuscribeService: SubscribeService, public dialogRef: MatDialogRef<AdmAddSubscriptorComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      subsName: ['', Validators.required],
      subsEmail: ['', Validators.email],
      subsPhone: ['', Validators.required],
      subsMessage: ['', Validators.required],
      company: ['', Validators.nullValidator]
     

    


    });
  }
  async onSubmit() {
    if (this.form.valid) {
      this.c.name = this.form.get('subsName').value;;
      this.c.company = this.form.get('company').value;;
      this.c.email = this.form.get('subsEmail').value;;
      this.c.phone = this.form.get('subsPhone').value;;
      this.c.message = this.form.get('subsMessage').value;;
      this.SuscribeService.Subscribeadd(this.c).subscribe(s => {
        this.dialogRef.close({ data: s });
        this.openSnackBar("Creado Correctamente!!", "Aceptar");
      }, err => {
        console.log(err);
        this.openSnackBar("Error Al Crear", "Aceptar");
      });
    }
    else {
      this.openSnackBar("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar");
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
