import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductService } from 'src/app/Services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-edit-products',
  templateUrl: './adm-edit-products.component.html',
  styleUrls: ['./adm-edit-products.component.css']
})
export class AdmEditProductsComponent implements OnInit {
  form: FormGroup;
  productEdit: Product = new Product;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private productservice: ProductService, public dialogRef: MatDialogRef<AdmEditProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productEdit.id=this.product.id;
    this.productEdit.categoryId=this.product.categoryId;
    this.productEdit.type=this.product.type;
    this.productEdit.fabric=this.product.fabric;
    this.productEdit.design=this.product.design;
    this.productEdit.quantity=this.product.quantity;
    this.productEdit.size=this.product.size;
    this.productEdit.handle=this.product.handle;
    this.productEdit.photo=this.product.photo;
    this.form = this.fb.group({
      productType: ['', Validators.required],
      productFabric: ['', Validators.required],
      productDesign: ['', Validators.required],
      productQuantity: ['', Validators.required],
      productSize: ['', Validators.required],
      handle:['', Validators.nullValidator]
   

    });
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if((this.productEdit.type)&&(this.productEdit.fabric)&&(this.productEdit.design))
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
