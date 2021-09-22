import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/Services/product.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { UsrPasosCotizacionComponent } from '../../Cotizaciones/usr-pasos-cotizacion/usr-pasos-cotizacion.component';

@Component({
  selector: 'app-usr-detail-product',
  templateUrl: './usr-detail-product.component.html',
  styleUrls: ['./usr-detail-product.component.css']
})
export class UsrDetailProductComponent implements OnInit {
  product: Product;
  api:String;
  constructor(public dialog: MatDialog,private serviceProduct: ProductService, private route: ActivatedRoute, private _snackBar: MatSnackBar,private _constant: ConstantsService) {
    this.product = new Product();
    this.api =this._constant.apiUrl;	
  }


  ngOnInit() {
    this.product = this.serviceProduct.product;
    if (this.product.id == undefined) {
      const productId = this.route.snapshot.paramMap.get("productId");
      this.serviceProduct.getProductById(productId).subscribe(p => {
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
    const dialogRef = this.dialog.open(UsrPasosCotizacionComponent, { data: { "product":this.product , "isProduct":true}, width:"500px" });
    dialogRef.afterClosed().subscribe(res => {
    })
    err=>{
      console.log("ERROR, No se añadio", err);
      this.openSnackBar("Error, No se pudo añadir", "Aceptar");
    }
  }

}
