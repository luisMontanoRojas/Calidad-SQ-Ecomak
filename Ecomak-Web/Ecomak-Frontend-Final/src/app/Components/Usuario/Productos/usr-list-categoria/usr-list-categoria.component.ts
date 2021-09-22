import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-usr-list-categoria',
  templateUrl: './usr-list-categoria.component.html',
  styleUrls: ['./usr-list-categoria.component.css']
})
export class UsrListCategoriaComponent implements OnInit {

  categorys:Category[]=new Array;
  

  constructor(private categoryService:CategoryService) { 
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
