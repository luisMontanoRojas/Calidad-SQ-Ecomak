import { Component, OnInit, Inject } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { SubscribeService } from 'src/app/Services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdmEditSubscripcionComponent } from '../adm-edit-subscripcion/adm-edit-subscripcion.component';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';

@Component({
  selector: 'app-adm-detalle-subscripcion',
  templateUrl: './adm-detalle-subscripcion.component.html',
  styleUrls: ['./adm-detalle-subscripcion.component.css']
})
export class AdmDetalleSubscripcionComponent implements OnInit {

  
  constructor(public dialog: MatDialog,private subscribeservice: SubscribeService, private router:  Router,private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA ) public subs:Subscribe,public dialogRef:MatDialogRef<AdmDetalleSubscripcionComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }  

  onDialogResponseEdit(subscribeEdit:Subscribe) {
    this.subs=subscribeEdit;
  }

  onEditForm(SubscribeToEdit: Subscribe) {
    const dialogRefEdit = this.dialog.open(AdmEditSubscripcionComponent, { data: SubscribeToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedSubscribe => {
      if (EditedSubscribe) {
       this.onDialogResponseEdit(EditedSubscribe["data"]);
      }
    });
  }
  
  openDialog(): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Subscripcion";
    dialog.mensaje="Esta seguro que desea elimidar la subscripcion?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete();
      }
    })
  }
  
  onDelete(){
    this.subscribeservice.deleteSubscribe(this.subs.id).subscribe(
      res=>{
        if(res){
          this.onClickCerrarDelete(this.subs.id);
        }
      }, err =>{
        console.log("ERROR, No se elimino", err);
        this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
      }
    );
  }

  onClickCerrar(){
    this.dialogRef.close();
  }

  onClickCerrarDelete(id:Number){
    this.dialogRef.close(id);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
}
