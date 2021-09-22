import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Category';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usr-list-productos',
  templateUrl: './usr-list-productos.component.html',
  styleUrls: ['./usr-list-productos.component.css']
})
export class UsrListProductosComponent implements OnInit {

  products:Product[]= new Array;
  @Input() category:Category;


  constructor(private productService:ProductService, private router:  Router) { 
  }

  ngOnInit() {
    this.productService.getProducts(this.category.id).subscribe(products=>{
      this.products=products;
      this.products.forEach(element => {
        element.categoryId=this.category.id;
      });
    });
    
    
  }


}
