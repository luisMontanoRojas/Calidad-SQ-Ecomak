import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Category';
import { CategoryTrService } from 'src/app/Services/category-tr.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-usr-list-trs',
  templateUrl: './usr-list-trs.component.html',
  styleUrls: ['./usr-list-trs.component.css']
})
export class UsrListTrsComponent implements OnInit {

  products: Product[] = new Array;
  categorys: Category[] = new Array;
  categorysFiltered: Category[];
  categorysAll:Category[];
  current:String;


  constructor(private categoryTrService: CategoryTrService, private router: Router) {
  }

  ngOnInit() {
    this.current="todos";
    this.categoryTrService.getCategorysForTr().subscribe(categorys => {
      this.categorysAll=categorys;
      categorys.forEach(element => {
        this.categoryTrService.getProductsTr(element.id).subscribe(products => {
          if (products.length > 0) {
            this.categorys.push(element)
          }
        })
      });
      this.categorysFiltered = this.categorys;
    });
  }

  filter(category: Category) {
    this.categorysFiltered = []; 
    if(category!=null)
    {
      this.categorysFiltered.push(category);
        $(`#btn-${category.id}`).addClass("active");
        $(`#btn-${this.current}`).removeClass("active");
        this.current=category.id.toString();
    } else {
      $(`#btn-todos`).addClass("active");
        $(`#btn-${this.current}`).removeClass("active");
        this.current="todos";
      this.categorysFiltered=this.categorysAll;
    }
  }
}


