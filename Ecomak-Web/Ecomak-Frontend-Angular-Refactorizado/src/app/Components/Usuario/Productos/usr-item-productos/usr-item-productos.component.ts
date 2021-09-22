import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usr-item-productos',
  templateUrl: './usr-item-productos.component.html',
  styleUrls: ['./usr-item-productos.component.css']
})
export class UsrItemProductosComponent implements OnInit {


  @Input() product:Product;

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      product: true
    }

    return classes;
  }

  onDetail(product:Product){
    this.router.navigateByUrl(`categorias/${product.categoryId}/productos/${product.id}`);
  }
  public createImgPath = (serverPath: string) => {
    console.log("a");
    return `http://localhost:50455/a/${serverPath}`;
  }

}
