import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { PromoService } from 'src/app/Services/promo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Dialog } from 'src/app/Models/Dialog';
import { AdmConfirmDialogComponent } from '../../PaginasEstaticas/adm-confirm-dialog/adm-confirm-dialog.component';
import { AdmEditPromoComponent } from '../adm-edit-promo/adm-edit-promo.component';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { NativeDateAdapter, MAT_DATE_FORMATS, DateAdapter } from "@angular/material";
import * as moment from 'moment';
const months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEP', 'OCT', 'NOV', 'DIC'];
export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${day} ${months[month]} ${year}`;
    }
    return date.toDateString();
  }
}
export const APP_DATE_FORMATS =
{
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
@Component({
  selector: 'app-adm-detail-promo',
  templateUrl: './adm-detail-promo.component.html',
  styleUrls: ['./adm-detail-promo.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AdmDetailPromoComponent implements OnInit {

  promo: Promo = new Promo;
  valueIni: string;
  valueEnd: string;
  api: String;


  constructor(private promoService: PromoService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog, private _constant: ConstantsService, private _snackBar: MatSnackBar) {
    this.api = this._constant.apiUrl;
  }

  ngOnInit() {
    const promoId = this.route.snapshot.paramMap.get("promoId");
    this.promo.id = Number(promoId);
    this.promoService.getPromo(promoId).subscribe(e => {
      this.promo = e;
      this.valueIni=this.setfechacorrectaini(this.promo.iniDate).toString();
      this.valueEnd=this.setfechacorrectaend(this.promo.endDate).toString();
    });
  }
  setfechacorrectaini(DateUtc: Date) {
    var date = moment(DateUtc).locale("es").subtract(new Date().getTimezoneOffset() / 60, 'hours');
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }
  setfechacorrectaend(DateUtc: Date) {
    var date = moment(DateUtc).locale("es");
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }

  openDialog(): void {
    let dialog: Dialog = new Dialog;
    dialog.titulo = "Eliminar Promocion";
    dialog.mensaje = "Esta seguro que desea eliminar la promocion?";
    dialog.btnSi = "Si";
    dialog.btnNo = "Cancelar";
    const dialogRef = this.dialog.open(AdmConfirmDialogComponent, { data: dialog });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDelete();
      }
    })
  }

  onDialogResponseEdit(promoEdit: Promo) {
    this.promo = promoEdit;
  }
  
  onEditForm(PromoToEdit: Promo) {
    const dialogRefEdit = this.dialog.open(AdmEditPromoComponent, { data: PromoToEdit, width: '400px' });
    dialogRefEdit.afterClosed().subscribe(EditedPromo => {
      if (EditedPromo) {
        this.onDialogResponseEdit(EditedPromo["data"]);
      }
    });
  }

  onDelete() {
    this.promoService.deletePromo(this.promo).subscribe(res => {
      if (res) {
        this.router.navigateByUrl(`/admin/promociones`);
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
