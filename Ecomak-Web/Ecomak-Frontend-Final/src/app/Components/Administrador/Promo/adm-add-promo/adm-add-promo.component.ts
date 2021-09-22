import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { PromoService } from 'src/app/Services/promo.service';
import { Promo } from 'src/app/Models/Promo';
import * as moment from 'moment';
import { NativeDateAdapter, MAT_DATE_FORMATS, DateAdapter } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-adm-add-promo',
  templateUrl: './adm-add-promo.component.html',
  styleUrls: ['./adm-add-promo.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AdmAddPromoComponent implements OnInit {
  form: FormGroup;
  tittle: string;
  description: string;
  iniDate: Date;
  endDate: Date;
  iniDateUser: string;
  endDateUser: string;

  promo = new Promo;

  public response: { 'dbPath': '' };

  constructor(private fb: FormBuilder,public dialog: MatDialog, private promoService: PromoService, public dialogRef: MatDialogRef<AdmAddPromoComponent>,
    private _snackBar: MatSnackBar) {
    this.iniDate = new Date();
    this.endDate = new Date();
  }

  ngOnInit() {
    this.form = this.fb.group({
      promTitle: ['', Validators.required],
      promDescription: ['', Validators.required],
      prominiDate: ['', Validators.required],
      promendDate: ['', Validators.required]
    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
  async onSubmit() {

    if (this.form.valid) {
      this.promo.tittle = this.form.get('promTitle').value;;
      this.promo.description = this.form.get('promDescription').value;;
      this.promo.iniDate = this.form.get('prominiDate').value;;
      this.promo.endDate = this.form.get('promendDate').value;;
      this.promo.iniDateUser = this.setfechacorrectaini(this.promo.iniDate);

      this.promo.endDateUser = this.setfechacorrectaend(this.promo.endDate);
      this.promo.image = this.response.dbPath;
      this.promoService.addPromo(this.promo).subscribe(s => {
        this.dialogRef.close({ data: this.promo });
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

  setfechacorrectaini(DateUtc: Date) {
    var date = moment(DateUtc).locale("es").subtract(new Date().getTimezoneOffset() / 60, 'hours');
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }
  setfechacorrectaend(DateUtc: Date) {
    var date = moment(DateUtc).locale("es")
    var fechacorrecta = (date.format('LL'));
    return fechacorrecta;
  }


  uploadFinished = (event) => {
    this.response = event;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
