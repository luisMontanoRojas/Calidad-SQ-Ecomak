import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { Router } from '@angular/router';
import { ProductTr } from 'src/app/Models/ProductTr';
import { ConstantsService } from 'src/app/Services/common/constants.service';

@Component({
  selector: 'app-usr-list-products-trs',
  templateUrl: './usr-list-products-trs.component.html',
  styleUrls: ['./usr-list-products-trs.component.css']
})

export class UsrListProductsTrsComponent implements OnInit {
  products:ProductTr[]= new Array;
  @Input() category:Category;
  api:String;
  constructor(private productTrService:ProductTrService, private router:  Router,private _constant: ConstantsService) { 
    this.api =this._constant.apiUrl;
  }

  ngOnInit() {
    this.productTrService.getProductsTr(this.category.id).subscribe(products=>{
      this.products=products;
      this.products.forEach(element => {
        element.categoryId=this.category.id;
      });
    });
    
  }

  onDetail(product:ProductTr){
    this.productTrService.productTr=product;
    this.router.navigateByUrl('/trabajos-realizados/'+product.idTr);
  }

}
