import { Component, OnInit } from '@angular/core';
import { Promo } from '../../../../Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { AdmEditPromoComponent } from '../adm-edit-promo/adm-edit-promo.component';
import { AdmAddPromoComponent } from '../adm-add-promo/adm-add-promo.component';


@Component({
  selector: 'app-adm-list-promo',
  templateUrl: './adm-list-promo.component.html',
  styleUrls: ['./adm-list-promo.component.css']
})
export class AdmListPromoComponent implements OnInit {

  promotions: Promo[];
  p: Promo=new Promo;

  constructor(public dialog: MatDialog, private promoService:PromoService, private router:  Router, private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['#', 'Titulo', 'Fecha de Inicio','Fecha Fin','imagen','Opciones'];
  dataSource;
  data;

  ngOnInit() {
    this.promoService.getPromos()
      .subscribe((data: Promo[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }

  openDialog(promo:Promo): void {
    let dialog:Dialog=new Dialog;
    dialog.titulo="Eliminar Promocion";
    dialog.mensaje="Esta seguro que desea elimidar la Promocio ?";
    dialog.btnSi="Si";
    dialog.btnNo="Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { height: 'auto',
    width: 'auto', data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete(promo);
      }

    })
  }

  onDelete(promo:Promo) {
    this.promoService.deletePromo(promo).subscribe(res=>{
      if (res) {
        this.dataSource.data = this.dataSource.data.filter(e => e.id !== promo.id);
        this.openSnackBar("Eliminado correctamente", "Aceptar");
      }
    }, err => {
      console.log("ERROR, No se elimino", err);
      this.openSnackBar("Error, No se pudo eliminar", "Aceptar");
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onDialogResponseEdit(promoEdit:Promo) {
    this.data.find(s => s.id == promoEdit.id).tittle = promoEdit.tittle;
    this.data.find(s => s.id == promoEdit.id).description = promoEdit.description;
    this.data.find(s => s.id == promoEdit.id).iniDate = promoEdit.iniDate;
    this.data.find(s => s.id == promoEdit.id).endDate = promoEdit.endDate;
    this.data.find(s => s.id == promoEdit.id).image = promoEdit.image;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEditForm(PromoToEdit: Promo) {
    const dialogRefEdit = this.dialog.open(AdmEditPromoComponent, { data: PromoToEdit,width:'400px' });
    dialogRefEdit.afterClosed().subscribe(EditedPromo => {
      if (EditedPromo) {
        this.onDialogResponseEdit(EditedPromo["data"]);
      }
    });
  }
  
  
  onOptions(id:number){
    this.router.navigateByUrl(`/admin/promociones/${id}`);
  }

  addPromo(Promo:Promo){
    this.promoService.addPromo(Promo).subscribe(Promo => {
      this.promotions.push(Promo);
    });
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddPromoComponent, { width: "500px" });
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
