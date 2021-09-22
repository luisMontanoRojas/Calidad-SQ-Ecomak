import { Component, OnInit, Inject } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-edit-productos-tr',
  templateUrl: './adm-edit-productos-tr.component.html',
  styleUrls: ['./adm-edit-productos-tr.component.css']
})
export class AdmEditProductosTrComponent implements OnInit {

  form: FormGroup;
  productTrEdit: ProductTr = new ProductTr;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private productservice: ProductTrService, public dialogRef: MatDialogRef<AdmEditProductosTrComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductTr,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productTrEdit.idTr=this.product.idTr;
    this.productTrEdit.categoryId=this.product.categoryId;
    this.productTrEdit.typeTr=this.product.typeTr;
    this.productTrEdit.fabricTr=this.product.fabricTr;
    this.productTrEdit.designTr=this.product.designTr;
    this.productTrEdit.quantityTr=this.product.quantityTr;
    this.productTrEdit.sizeTr=this.product.sizeTr;
    this.productTrEdit.handleTr=this.product.handleTr;
    this.productTrEdit.photoTr=this.product.photoTr;
    this.form = this.fb.group({
      productTypeTr: ['', Validators.required],
      productFabricTr: ['', Validators.required],
      productDesignTr: ['', Validators.required],
      productQuantityTr: ['', Validators.required],
      productSizeTr: ['', Validators.required],
      handleTr: ['', Validators.nullValidator]

    });
  }
  onCancelar(): void {
    this.dialogRef.close();
  }
  onSubmitEdit() {
    if (this.form.valid) {
      this.productTrEdit.typeTr = this.form.get('productTypeTr').value;
      this.productTrEdit.fabricTr = this.form.get('productFabricTr').value;;
      this.productTrEdit.designTr = this.form.get('productDesignTr').value;;
      this.productTrEdit.quantityTr = this.form.get('productQuantityTr').value;;
      this.productTrEdit.sizeTr = this.form.get('productSizeTr').value;;
      this.productTrEdit.handleTr = this.form.get('handleTr').value;;
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
