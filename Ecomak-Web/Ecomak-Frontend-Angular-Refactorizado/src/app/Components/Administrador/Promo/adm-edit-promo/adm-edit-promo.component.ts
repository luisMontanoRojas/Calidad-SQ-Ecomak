import { Component, OnInit, Inject} from '@angular/core';
import { Promo } from 'src/app/Models/Promo';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PromoService } from 'src/app/Services/promo.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-adm-edit-promo',
  templateUrl: './adm-edit-promo.component.html',
  styleUrls: ['./adm-edit-promo.component.css']
})
export class AdmEditPromoComponent implements OnInit {

  promoEdit: Promo = new Promo;
  constructor(public dialog: MatDialog, private promoservice: PromoService, public dialogRef: MatDialogRef<AdmEditPromoComponent>,
    @Inject(MAT_DIALOG_DATA) public promo: Promo,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.promoEdit.id=this.promo.id;
    this.promoEdit.tittle=this.promo.tittle;
    this.promoEdit.description=this.promo.description;
    this.promoEdit.endDate=this.promo.endDate;
    this.promoEdit.iniDate=this.promo.iniDate;
    this.promoEdit.image=this.promo.image;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.promoEdit.tittle)&&(this.promoEdit.description))
    {
      this.promoservice.editPromo(this.promoEdit).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Editado Correctamente!!","Aceptar",{
          duration:2000
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
