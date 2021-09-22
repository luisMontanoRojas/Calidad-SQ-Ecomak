import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ProductTrService } from 'src/app/Services/product-tr.service';
import { ProductTr } from 'src/app/Models/ProductTr';

@Component({
  selector: 'app-usr-item-producto-tr',
  templateUrl: './usr-item-producto-tr.component.html',
  styleUrls: ['./usr-item-producto-tr.component.css']
})
export class UsrItemProductoTrComponent implements OnInit {

  @Input() product:ProductTr;

  constructor(private productTrService:ProductTrService, private router:Router) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      product: true
    }

    return classes;
  }

  onDetail(product:ProductTr){
    this.router.navigateByUrl(`categoriasTr/${product.categoryId}/trs/${product.idTr}`);
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:50455/a/${serverPath}`;
  }

}
