import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductService } from 'src/app/Services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-add-products',
  templateUrl: './adm-add-products.component.html',
  styleUrls: ['./adm-add-products.component.css']
})
export class AdmAddProductsComponent implements OnInit {
  form: FormGroup;
  type: string = "";
  fabric: string = "";
  design: string;
  quantity: string;
  size: string;
  handle: string;
  photo: string;
  
  public response: { 'dbPath': '' };
  productAdd: Product = new Product;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private productservice: ProductService, public dialogRef: MatDialogRef<AdmAddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public categorieId: number, private _snackBar: MatSnackBar) { }

  ngOnInit() {
   
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
  async onSubmit() {

    if (this.form.valid  ) {
      this.productAdd.categoryId = this.categorieId;
      this.productAdd.type = this.form.get('productType').value;;
      this.productAdd.photo = this.response.dbPath;;
      this.productAdd.fabric = this.form.get('productFabric').value;;
      this.productAdd.design = this.form.get('productDesign').value;;
      this.productAdd.quantity = this.form.get('productQuantity').value;;
      this.productAdd.size = this.form.get('productSize').value;;
      this.productAdd.handle = this.form.get('handle').value;;
      this.productservice.productadd(this.productAdd).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Creado Correctamente!!", "Aceptar", {
          duration: 2000
        });
      }, err => {
        console.log(err);
        this._snackBar.open("Error Al Crear", "Aceptar", {
          duration: 2000,
        });
      });
    }
    else {
        this._snackBar.open("Por Favor, ingrese los campos en rojo correctamente.", "Aceptar", {
          duration: 2000,
        });
    }

  }
  public uploadFinished = (event) => {
    this.response = event;
  }

}
