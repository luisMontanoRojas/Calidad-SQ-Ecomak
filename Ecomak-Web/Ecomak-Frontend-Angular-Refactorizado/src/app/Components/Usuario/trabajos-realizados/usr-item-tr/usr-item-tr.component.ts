import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';
import { Router } from '@angular/router';
import { CategoryTrService } from 'src/app/Services/category-tr.service';

@Component({
  selector: 'app-usr-item-tr',
  templateUrl: './usr-item-tr.component.html',
  styleUrls: ['./usr-item-tr.component.css']
})
export class UsrItemTrComponent implements OnInit {

  @Input() category:Category;
  show: boolean;

  constructor(private categoryTrService:CategoryTrService, private router:Router) { }

  ngOnInit() {
    
  }
  setClasses() {
    let classes = {
      product: true
    }

    return classes;
  }


}
