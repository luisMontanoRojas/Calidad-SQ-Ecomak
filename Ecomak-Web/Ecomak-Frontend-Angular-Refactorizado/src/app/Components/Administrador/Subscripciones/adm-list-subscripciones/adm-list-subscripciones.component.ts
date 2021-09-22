import { Component, OnInit } from '@angular/core';
import { Subscribe } from 'src/app/Models/Subscribe';
import { SubscribeService } from 'src/app/Services/Subscribe.service';
import { Router } from '@angular/router';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdmEditSubscripcionComponent } from '../adm-edit-subscripcion/adm-edit-subscripcion.component';
import { AdmAddSubscriptorComponent } from '../adm-add-subscriptor/adm-add-subscriptor.component';
import { AdmDetalleSubscripcionComponent } from '../adm-detalle-subscripcion/adm-detalle-subscripcion.component';



@Component({
  selector: 'app-adm-list-subscripciones',
  templateUrl: './adm-list-subscripciones.component.html',
  styleUrls: ['./adm-list-subscripciones.component.css']
})
export class AdmListSubscripcionesComponent implements OnInit {

  subscribes: Subscribe[];
  c: Subscribe = new Subscribe;
  constructor(public dialog: MatDialog, private subscribeservice: SubscribeService, private router: Router, private _snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['#', 'Nombre', 'Empresa', 'Email', 'Telefono', 'Opciones'];
  dataSource;
  data;
  ngOnInit() {
    this.subscribeservice.getSubscribes()
      .subscribe((data: Subscribe[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }
  deleteSubscribe(Subscribe: Subscribe) {
    this.data = this.data.filter(e => e.id !== Subscribe.id);
    this.subscribeservice.deleteSubscribe(Subscribe).subscribe();
  }

  addSubscribe(Subscribe: Subscribe) {
    this.subscribeservice.Subscribeadd(Subscribe).subscribe(Subscribe => {
      this.subscribes.push(Subscribe);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDelete(id: number) {
    this.c.id = id;
    this.subscribeservice.deleteSubscribe(this.c).subscribe(
      res => {
        if (res) {
          this.dataSource.data = this.dataSource.data.filter(e => e.id !== id);
          this.openSnackBar("Eliminado correctamente", "Aceptar");
        }
      }, err => {
        console.log("ERROR, No se elimino", err);
        this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
      });
  }
  onDialogResponseEdit(subscribeEdit: Subscribe) {
    this.data.find(s => s.id == subscribeEdit.id).name = subscribeEdit.name;
    this.data.find(s => s.id == subscribeEdit.id).company = subscribeEdit.company;
    this.data.find(s => s.id == subscribeEdit.id).email = subscribeEdit.email;
    this.data.find(s => s.id == subscribeEdit.id).phone = subscribeEdit.phone;
    this.data.find(s => s.id == subscribeEdit.id).message = subscribeEdit.message;
  }


  openDialogDetalle(subscribe:Subscribe){
    const dialogRef = this.dialog.open(AdmDetalleSubscripcionComponent, { data: subscribe,width:"400px" });
    dialogRef.afterClosed().subscribe(res => {
    })
  }

  openDialog(idSubscribe: number): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Subscripcion";
    dialog.mensaje = "Esta seguro que desea elimidar la subscripcion?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete(idSubscribe);
      }

    })
  }
  onEditForm(SubscribeToEdit: Subscribe) {
    const dialogRefEdit = this.dialog.open(AdmEditSubscripcionComponent, { data: SubscribeToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedSubscribe => {
      if (EditedSubscribe) {
        this.onDialogResponseEdit(EditedSubscribe["data"]);
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddSubscriptorComponent, { width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.data.push(res["data"]);
        this.dataSource = new MatTableDataSource(this.data);
      }
      err=>{
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }

}
