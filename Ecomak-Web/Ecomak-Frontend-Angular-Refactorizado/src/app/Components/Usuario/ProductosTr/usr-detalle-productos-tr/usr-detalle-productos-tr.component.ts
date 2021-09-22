import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductTr } from 'src/app/Models/ProductTr';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsrPasosCotizacionesComponent } from '../../Cotizaciones/usr-pasos-cotizaciones/usr-pasos-cotizaciones.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usr-detalle-productos-tr',
  templateUrl: './usr-detalle-productos-tr.component.html',
  styleUrls: ['./usr-detalle-productos-tr.component.css']
})
export class UsrDetalleProductosTrComponent implements OnInit {

  product:ProductTr;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(public dialog: MatDialog, private productService: ProductTrService, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.product = new ProductTr;
  }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get("productIdTr");
    const categoryId = this.route.snapshot.paramMap.get("categoryIdTr");

    this.productService.getProductTr(categoryId, productId).subscribe(p => {
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
