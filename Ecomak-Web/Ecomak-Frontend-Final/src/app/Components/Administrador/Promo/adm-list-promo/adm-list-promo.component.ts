import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { PromoService } from 'src/app/Services/promo.service';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { AdmAddPromoComponent } from '../adm-add-promo/adm-add-promo.component';
import { AdmEditPromoComponent } from '../adm-edit-promo/adm-edit-promo.component';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { Dialog } from 'src/app/Models/Dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-adm-list-promo',
  templateUrl: './adm-list-promo.component.html',
  styleUrls: ['./adm-list-promo.component.css']
})
export class AdmListPromoComponent implements OnInit {


  p: Promo = new Promo;
  api: String;
  showSpinner = true;
  showError = false;

  constructor(public dialog: MatDialog, private promoService: PromoService, private _constant: ConstantsService, private _snackBar: MatSnackBar, private router: Router) {
    this.api = this._constant.apiUrl;
  }

  displayedColumns: string[] = ['#', 'Titulo', 'Fecha de Inicio', 'Fecha Fin', 'imagen', 'Opciones'];
  dataSource;
  data;

  ngOnInit() {
    this.promoService.getPromos()
      .subscribe((data: Promo[]) => {
        this.data=data;
        var datafecha = this.setDates(data);
        this.dataSource = new MatTableDataSource(datafecha);
        this.showSpinner = false;
    }, err => {
      console.log(err);
      this.showSpinner = false;
      this.showError = true;
    });

  }
  setDates(data:Array<Promo>){
    for (let i =   0; i <  data.length; i++ ) {
      const element = data[i]; 
      element.iniDateUser = this.setfechacorrecta(element.iniDate);
      element.endDateUser = this.setfechacorrecta(element.endDate);
      
    }
      
    return data;
    
  }
  setfechacorrecta(DateUtc: Date) {
    var date = moment(DateUtc).locale("es").subtract(new Date().getTimezoneOffset()/60, 'hours');
    var hours = date.hours();
    var fechacorrecta = (date.subtract(hours, 'hours').format('LL'))
    return fechacorrecta
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AdmAddPromoComponent, { width: "500px" });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.data.push(res["data"]);
        this.dataSource = new MatTableDataSource(this.data);
      }
      err => {
        console.log("ERROR, No se añadio", err);
        this.openSnackBar("Error, No se pudo añadir", "Aceptar");
      }
    })
  }

  onEditForm(PromoToEdit: Promo) {
    const dialogRefEdit = this.dialog.open(AdmEditPromoComponent, { data: PromoToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedPromo => {
      if (EditedPromo) {
        this.onDialogResponseEdit(EditedPromo["data"]);
      }
    });
  }

  onDialogResponseEdit(promoEdit: Promo) {
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

  onOptions(id: number) {
    this.router.navigateByUrl(`/admin/promociones/${id}`);
  }

  openDialog(promo: Promo): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Promocion";
    dialog.mensaje = "Esta seguro que desea elimidar esta promocion ?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, {
      height: 'auto',
      width: 'auto', data: dialog
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete(promo);
      }

    })
  }

  onDelete(promo: Promo) {
    this.promoService.deletePromo(promo).subscribe(res => {
      if (res) {
        this.data = this.data.filter(e => e.id !== promo.id);
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

}
