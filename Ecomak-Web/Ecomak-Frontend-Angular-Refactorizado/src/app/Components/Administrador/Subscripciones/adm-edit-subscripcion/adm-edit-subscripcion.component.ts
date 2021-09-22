import { Component, OnInit, Inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Subscribe } from 'src/app/Models/Subscribe';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-adm-edit-subscripcion',
  templateUrl: './adm-edit-subscripcion.component.html',
  styleUrls: ['./adm-edit-subscripcion.component.css']
})
export class AdmEditSubscripcionComponent implements OnInit {
  subscribeEdit: Subscribe = new Subscribe;
  constructor(public dialog: MatDialog, private subscribeservice: SubscribeService, public dialogRef: MatDialogRef<AdmEditSubscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public subscribe: Subscribe,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.subscribeEdit.id=this.subscribe.id;
    this.subscribeEdit.name=this.subscribe.name;
    this.subscribeEdit.company=this.subscribe.company;
    this.subscribeEdit.email=this.subscribe.email;
    this.subscribeEdit.phone=this.subscribe.phone;
    this.subscribeEdit.message=this.subscribe.message;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.subscribeEdit.name)&&(this.subscribeEdit.phone)&&(this.subscribeEdit.message)&&(this.subscribeEdit.email))
    {
      this.subscribeservice.editSubscribe(this.subscribeEdit).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Editado Correctamente!!","Aceptar",{
          duration:2000,
        });
      },err=>{
        console.log(err);
        this._snackBar.open("Error Al Editar","Aceptar",{
          duration:2000,
        });
      });
    }
    else
    {
      this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
        duration: 2000,
      });
    }
    
  }
}
