import { Component, OnInit, Inject } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-adm-edit-productos-tr',
  templateUrl: './adm-edit-productos-tr.component.html',
  styleUrls: ['./adm-edit-productos-tr.component.css']
})
export class AdmEditProductosTrComponent implements OnInit {
  
  productTrEdit: ProductTr = new ProductTr;
  constructor(public dialog: MatDialog, private productservice: ProductTrService, public dialogRef: MatDialogRef<AdmEditProductosTrComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductTr,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productTrEdit.idTr=this.product.idTr;
    this.productTrEdit.categoryId=this.product.categoryId;
    this.productTrEdit.nameTr=this.product.nameTr;
    this.productTrEdit.priceTr=this.product.priceTr;
    this.productTrEdit.quantityTr=this.product.quantityTr;
    this.productTrEdit.stateTr=this.product.stateTr;
    this.productTrEdit.photoTr=this.product.photoTr;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.productTrEdit.nameTr)&&(this.productTrEdit.priceTr)&&(this.productTrEdit.stateTr))
    {
      this.productservice.editProductTr(this.productTrEdit).subscribe(s => {
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
