import { Component, OnInit, Inject} from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdmEditSubscripcionComponent } from '../adm-edit-subscripcion/adm-edit-subscripcion.component';

@Component({
  selector: 'app-adm-detalle-subscripciones',
  templateUrl: './adm-detalle-subscripcion.component.html',
  styleUrls: ['./adm-detalle-subscripcion.component.css']
})
export class AdmDetalleSubscripcionComponent implements OnInit {

  c : Subscribe=new Subscribe;
  constructor(public dialog: MatDialog,private subscribeservice: SubscribeService, private router:  Router,private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA ) public subs:Subscribe,public dialogRef:MatDialogRef<AdmDetalleSubscripcionComponent>) { }

  ngOnInit() {
    const idSubscribe = this.route.snapshot.paramMap.get("idSubscribe");
    this.c.id=Number(idSubscribe);
    this.subscribeservice.getSubscribe(idSubscribe).subscribe( subscribe=>{
      this.c = subscribe;
    });
  }  
  onDelete(){
    this.subscribeservice.deleteSubscribe(this.c).subscribe(subscribe=>{
      this.router.navigateByUrl(`/admin/subscribe`);
    });
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
  onClickCerrar(){
    this.dialogRef.close();
  }
  
}
