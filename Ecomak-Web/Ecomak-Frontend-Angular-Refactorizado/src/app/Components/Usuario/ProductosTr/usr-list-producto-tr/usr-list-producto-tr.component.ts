import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Category';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ProductTr } from 'src/app/Models/ProductTr';

@Component({
  selector: 'app-usr-list-producto-tr',
  templateUrl: './usr-list-producto-tr.component.html',
  styleUrls: ['./usr-list-producto-tr.component.css']
})
export class UsrListProductoTrComponent implements OnInit {

  
  products:ProductTr[]= new Array;
  @Input() category:Category;


  constructor(private productTrService:ProductTrService, private router:  Router) { 
  }

  ngOnInit() {
    this.productTrService.getProductsTr(this.category.id).subscribe(products=>{
      this.products=products;
      this.products.forEach(element => {
        element.categoryId=this.category.id;
      });
    });
    
  }

}
