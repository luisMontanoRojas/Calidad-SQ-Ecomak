import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usr-item-categoria',
  templateUrl: './usr-item-categoria.component.html',
  styleUrls: ['./usr-item-categoria.component.css']
})
export class UsrItemCategoriaComponent implements OnInit {

  @Input() category:Category;
  show: boolean;

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit() {
    
  }

}
