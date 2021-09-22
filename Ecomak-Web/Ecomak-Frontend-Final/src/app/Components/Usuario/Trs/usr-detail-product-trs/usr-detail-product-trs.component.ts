import { Component, OnInit } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { UsrPasosCotizacionComponent } from '../../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-usr-detail-product-trs',
  templateUrl: './usr-detail-product-trs.component.html',
  styleUrls: ['./usr-detail-product-trs.component.css']
})
export class UsrDetailProductTrsComponent implements OnInit {

  product: ProductTr;
  api:String;
  constructor(public dialog: MatDialog,private serviceProductTr: ProductTrService, private route: ActivatedRoute, private _snackBar: MatSnackBar,private _constant: ConstantsService) {
    this.product = new ProductTr();
    this.api =this._constant.apiUrl;	
  }


  ngOnInit() {
    this.product = this.serviceProductTr.productTr;
    if (this.product.idTr == undefined) {
      const productId = this.route.snapshot.paramMap.get("productIdTr");
      this.serviceProductTr.getProductById(productId).subscribe(p => {
        this.product = p;
      })
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogPasos() {
    const dialogRef = this.dialog.open(UsrPasosCotizacionComponent, { data: { "product":this.product , "isProduct":false}, width:"500px" });
    dialogRef.afterClosed().subscribe(res => {
    })
    err=>{
      console.log("ERROR, No se añadio", err);
      this.openSnackBar("Error, No se pudo añadir", "Aceptar");
    }
   }

}
