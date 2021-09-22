import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductTr } from 'src/app/Models/ProductTr';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-adm-add-productos-tr',
  templateUrl: './adm-add-productos-tr.component.html',
  styleUrls: ['./adm-add-productos-tr.component.css']
})
export class AdmAddProductosTrComponent implements OnInit {

  name: string;
  price: number;
  photo: string;
  quantity: number;
  state: boolean;

  public response: {'dbPath': ''}; 

  p: ProductTr = new ProductTr;
  
  constructor(public dialog: MatDialog, private productService: ProductTrService, public dialogRef: MatDialogRef<AdmAddProductosTrComponent>,
    @Inject(MAT_DIALOG_DATA) public categorieId: number,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if((this.name)&&(this.price))
    {
      this.p.categoryId=this.categorieId;
      this.p.nameTr=this.name;
      this.p.photoTr= this.response.dbPath;
      this.p.priceTr=this.price;
      this.p.quantityTr=this.quantity;
      this.p.stateTr=true;

      this.productService.productTradd(this.p).subscribe(s => {
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
    console.log(event,"sadadas");
    this.response = event;
  }
}
