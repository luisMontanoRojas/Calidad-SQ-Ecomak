import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Image } from 'src/app/Models/Image';
import * as $ from 'jquery';

@Component({
  selector: 'app-adm-add-productos',
  templateUrl: './adm-add-productos.component.html',
  styleUrls: ['./adm-add-productos.component.css']
})
export class AdmAddProductosComponent implements OnInit {

  name: string;
  price: number;
  photo: string;
  quantity: number;
  
  public response: {'dbPath': ''}; 

  productAdd : Product = new Product;

  constructor(public dialog: MatDialog, private productservice: ProductService, public dialogRef: MatDialogRef<AdmAddProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public categorieId: number,private _snackBar: MatSnackBar) { }
    
  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    if((this.name)&&(this.price))
    {
      this.productAdd.categoryId=this.categorieId;
      this.productAdd.name=this.name;
      this.productAdd.photo= this.response.dbPath;
      this.productAdd.price=this.price;
      this.productAdd.quantity=this.quantity;
      this.productAdd.state=true;

      this.productservice.productadd(this.productAdd).subscribe(s => {
        this.dialogRef.close({ data: s });
        this._snackBar.open("Creado Correctamente!!","Aceptar",{
          duration:2000
        });
      },err=>{
        console.log(err);
        this._snackBar.open("Error Al Crear","Aceptar",{
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

  public uploadFinished = (event) => {
    this.response = event;
  }

}
