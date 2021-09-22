import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Quote } from 'src/app/Models/Quote';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/Services/product.service';
import { ConstantsService } from 'src/app/Services/common/constants.service';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ProductTr } from 'src/app/Models/ProductTr';

@Component({
  selector: 'app-adm-detalle-cotizacion',
  templateUrl: './adm-detalle-cotizacion.component.html',
  styleUrls: ['./adm-detalle-cotizacion.component.css']
})
export class AdmDetalleCotizacionComponent implements OnInit {

  productToQuote;
  type;
  fabric;
  design;
  size;
  handle;

  isProduct: Boolean;

  api: String;

  constructor(public dialogRef: MatDialogRef<AdmDetalleCotizacionComponent>,
    @Inject(MAT_DIALOG_DATA) public quote: Quote, private http: HttpClient,
    private productService: ProductService, private _constant: ConstantsService,
    private trService: ProductTrService) {
    this.api = this._constant.apiUrl;
  }

  ngOnInit() {
    if (this.quote["productId"]) {
      this.productToQuote = new Product();
      this.productService.getProductById(this.quote["productId"]).subscribe(product => {
        this.productToQuote = product;
        this.type = product.type;
        this.design = product.design;
        this.fabric = product.fabric;
        this.size = product.size;
        this.handle = product.handle;
      });
      this.isProduct = true;
    }
    if (this.quote["trId"]) {
      this.productToQuote = new ProductTr();
      this.trService.getProductById(this.quote["trId"]).subscribe(tr => {
        this.productToQuote = tr;
        this.type = tr.typeTr;
        this.design = tr.designTr;
        this.fabric = tr.fabricTr;
        this.handle = tr.handleTr;
        this.size = tr.sizeTr;
      });
      this.isProduct = false;
    }

  }

  onClickCerrar() {
    this.dialogRef.close();
  }

}
