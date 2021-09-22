import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { Product } from 'src/app/Models/Product';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-adm-edit-productos',
  templateUrl: './adm-edit-productos.component.html',
  styleUrls: ['./adm-edit-productos.component.css']
})
export class AdmEditProductosComponent implements OnInit {
  productEdit: Product = new Product;
  constructor(public dialog: MatDialog, private productservice: ProductService, public dialogRef: MatDialogRef<AdmEditProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.productEdit.id=this.product.id;
    this.productEdit.categoryId=this.product.categoryId;
    this.productEdit.name=this.product.name;
    this.productEdit.price=this.product.price;
    this.productEdit.quantity=this.product.quantity;
    this.productEdit.state=this.product.state;
    this.productEdit.photo=this.product.photo;
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.productEdit.name)&&(this.productEdit.price))
    {
      this.productservice.editProduct(this.productEdit).subscribe(s => {
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
