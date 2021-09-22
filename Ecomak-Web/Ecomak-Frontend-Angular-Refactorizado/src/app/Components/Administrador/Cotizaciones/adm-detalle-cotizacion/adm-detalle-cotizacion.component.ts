import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Quote } from 'src/app/Models/Quote';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service'
import { HttpEventType, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adm-detalle-cotizacion',
  templateUrl: './adm-detalle-cotizacion.component.html',
  styleUrls: ['./adm-detalle-cotizacion.component.css']
})
export class AdmDetalleCotizacionComponent implements OnInit {

  productToQuote :Product = new Product;

  constructor(public dialogRef:MatDialogRef<AdmDetalleCotizacionComponent>,
    @Inject(MAT_DIALOG_DATA ) public quote:Quote, private http: HttpClient,
    private productService:ProductService) { 

    }

  ngOnInit() {
    this.productService.getProduct("1","1").subscribe( product=>{
      this.productToQuote = product;
    });
  }

  onClickCerrar(){
    this.dialogRef.close();
  }
  
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }
}
