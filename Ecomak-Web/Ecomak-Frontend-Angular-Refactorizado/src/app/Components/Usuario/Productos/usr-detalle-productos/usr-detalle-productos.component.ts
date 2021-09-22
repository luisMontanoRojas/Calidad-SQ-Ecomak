import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsrPasosCotizacionesComponent } from '../../Cotizaciones/usr-pasos-cotizaciones/usr-pasos-cotizaciones.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usr-detalle-productos',
  templateUrl: './usr-detalle-productos.component.html',
  styleUrls: ['./usr-detalle-productos.component.css']
})
export class UsrDetalleProductosComponent implements OnInit {

  product: Product;


  constructor(public dialog: MatDialog, private productService: ProductService, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.product = new Product;
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get("productId");
    const categoryId = this.route.snapshot.paramMap.get("categoryId");
    this.productService.getProduct(categoryId, productId).subscribe(p => {
      this.product = p;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialogPasos() {
    const dialogRef = this.dialog.open(UsrPasosCotizacionesComponent, { data: this.product, width:"500px" });
    dialogRef.afterClosed().subscribe(res => {
    })
    err=>{
      console.log("ERROR, No se añadio", err);
      this.openSnackBar("Error, No se pudo añadir", "Aceptar");
    }
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }
}
