import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/Product';
import { Observable } from 'rxjs';
import { ConstantsService } from './common/constants.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product=new Product();
  productsUrl:string = this._constant.apiUrl+'api/categories';
   

  constructor(private http:HttpClient,private _constant:ConstantsService) { }

  getProducts(idCategory:number):Observable<Product[]>{
    const url =this.productsUrl+"/"+idCategory.toString()+"/products";
    return this.http.get<Product[]>(url);
  }

  getProductById(id:string){
    const url =this.productsUrl+"/1"+"/products/by_id/"+id;
    return this.http.get<Product>(url);
  }

  productadd(product:Product):Observable<Product>{
    const url =this.productsUrl+"/"+product.categoryId+"/products";
    let body = JSON.stringify(product);
    return this.http.post<Product>(url, body, httpOptions);
    
  }

  getProduct(idCategory:string,id:string):Observable<Product>{
     return this.http.get<Product>(`${this.productsUrl}/${idCategory}/products/${id}`);
  }

  deleteProduct(product:Product){
    const url =this.productsUrl+"/"+product.categoryId+"/products/"+product.id;

    return this.http.delete<Product>(url,httpOptions);
  }
  
  editProduct(product: Product): Observable<any> {
    const url = `${this.productsUrl}/${product.categoryId}/products/${product.id}`;
    return this.http.put(url, product, httpOptions);
  }
}
