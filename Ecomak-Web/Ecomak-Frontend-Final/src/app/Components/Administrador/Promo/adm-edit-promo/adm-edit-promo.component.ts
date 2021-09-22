import { Component, OnInit, Inject } from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { PromoService } from 'src/app/Services/promo.service';
import { NativeDateAdapter, MAT_DATE_FORMATS, DateAdapter } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  selector: 'app-adm-edit-promo',
  templateUrl: './adm-edit-promo.component.html',
  styleUrls: ['./adm-edit-promo.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AdmEditPromoComponent implements OnInit {
  form: FormGroup;
  promoEdit: Promo = new Promo;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private promoservice: PromoService, public dialogRef: MatDialogRef<AdmEditPromoComponent>,
    @Inject(MAT_DIALOG_DATA) public promo: Promo,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.promoEdit.id=this.promo.id;
    this.promoEdit.tittle=this.promo.tittle;
    this.promoEdit.description=this.promo.description;
    this.promoEdit.endDate=this.promo.endDate;
    this.promoEdit.iniDate=this.promo.iniDate;
    this.promoEdit.image=this.promo.image;
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

  onSubmitEdit() {
    if (this.form.valid) {
      this.promo.tittle = this.form.get('promTitle').value;;
      this.promo.description = this.form.get('promDescription').value;;
      this.promo.iniDate = this.form.get('prominiDate').value;;
      this.promo.endDate = this.form.get('promendDate').value;;
      this.promo.iniDateUser = this.setfechacorrectaini(this.promo.iniDate);

      this.promo.endDateUser = this.setfechacorrectaend(this.promo.endDate);
      this.promoservice.editPromo(this.promoEdit).subscribe(s => {
        this.dialogRef.close({ data: s });
        this.openSnackBar("Editado Correctamente!!","Aceptar");
      },err=>{
        console.log(err);
        this.openSnackBar("Error Al Editar","Aceptar");
      });
    }
    else
    {
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
