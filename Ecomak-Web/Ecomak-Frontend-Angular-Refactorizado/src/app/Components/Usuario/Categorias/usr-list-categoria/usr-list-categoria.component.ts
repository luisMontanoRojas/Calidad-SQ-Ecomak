import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-usr-list-categoria',
  templateUrl: './usr-list-categoria.component.html',
  styleUrls: ['./usr-list-categoria.component.css']
})
export class UsrListCategoriaComponent implements OnInit {
  
  categorys:Category[]=new Array;
  

  constructor(private categoryService:CategoryService, private router:  Router) { 
  }

  ngOnInit() {
    this.categoryService.getCategorys().subscribe(categorys => {
      categorys.forEach(element => {
        this.categoryService.getProducts(element.id).subscribe(products => {
          if (products.length > 0) {
            this.categorys.push(element)
          }
        })
      });
    });  
  }
}
