import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductTr } from '../Models/ProductTr';
import { ConstantsService } from './common/constants.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProductTrService {

  productTr:ProductTr=new ProductTr();
  productsTRUrl:string = this._constant.apiUrl+'api/categoriesTr';

 constructor(private http:HttpClient,private _constant:ConstantsService) { }

 
 getProductsTr(idCategory:number):Observable<ProductTr[]>{
   const url =this.productsTRUrl+"/"+idCategory.toString()+"/trs";
   return this.http.get<ProductTr[]>(url);
 }
 productTradd(product:ProductTr):Observable<ProductTr>{
   const url =this.productsTRUrl+"/"+product.categoryId+"/trs";
   let body = JSON.stringify(product);
   return this.http.post<ProductTr>(url, body, httpOptions);
   
 }

 getProductById(id:string){
  const url =this.productsTRUrl+"/1"+"/trs/by_id/"+id;
  return this.http.get<ProductTr>(url);
}

 getProductTr(idCategory:string,id:string):Observable<ProductTr>{
    return this.http.get<ProductTr>(`${this.productsTRUrl}/${idCategory}/trs/${id}`);
 }

 deleteProductTr(product:ProductTr){
   const url =this.productsTRUrl+"/"+product.categoryId+"/trs/"+product.idTr;

   return this.http.delete<ProductTr>(url,httpOptions);
 }
 
 editProductTr(product: ProductTr): Observable<any> {
   const url = `${this.productsTRUrl}/${product.categoryId}/trs/${product.idTr}`;
   return this.http.put(url, product, httpOptions);
 }
}
