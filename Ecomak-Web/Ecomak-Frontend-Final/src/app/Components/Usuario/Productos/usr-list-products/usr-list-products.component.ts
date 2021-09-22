import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Category';
import { ProductService } from 'src/app/Services/product.service';
import { Router, UrlTree } from '@angular/router';
import { ConstantsService } from 'src/app/Services/common/constants.service';

@Component({
  selector: 'app-usr-list-products',
  templateUrl: './usr-list-products.component.html',
  styleUrls: ['./usr-list-products.component.css']
})
export class UsrListProductsComponent implements OnInit {

  products:Product[]= [];
  @Input() category:Category;
  api:String;
  constructor(private productService:ProductService, private router:  Router,private _constant: ConstantsService) { 
    this.api =this._constant.apiUrl;	
  }

  ngOnInit() {
    this.productService.getProducts(this.category.id).subscribe(products=>{
      this.products=products;
      this.products.forEach(element => {
        element.categoryId=this.category.id;
      });
    });
    
    
  }
  onDetail(product:Product){
    this.productService.product=product;
    this.router.navigateByUrl('/productos/'+product.id);
    //this.router.navigate(['/productos/',1, {'product':product}]);
    //this.router.navigateByUrl(`categorias/${product.categoryId}/productos/${product.id}`);
  }
 

}
