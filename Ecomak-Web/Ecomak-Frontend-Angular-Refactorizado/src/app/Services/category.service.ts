import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorysUrl:string = 'http://localhost:50455/a/api/categories';
   
  constructor(private http:HttpClient) { }
  
  getCategorys():Observable<Category[]>{
    return this.http.get<Category[]>(this.categorysUrl);
  }
  
  getProducts(idCategory:number):Observable<Product[]>{
    const url =this.categorysUrl+"/"+idCategory.toString()+"/products";
    return this.http.get<Product[]>(url);
  }

  categoryadd(category:Category):Observable<Category>{
    return this.http.post<Category>(this.categorysUrl,category,httpOptions);

  }

  getCategory(id:string):Observable<Category>{
     return this.http.get<Category>(`${this.categorysUrl}/${id}`);
  }

  deleteCategory(category:Category){
    const url = `${this.categorysUrl}/${category.id}`;
    return this.http.delete<Category>(url,httpOptions);
  }
  
  editCategory(category: Category): Observable<any> {
    const url = `${this.categorysUrl}/${category.id}`;
    return this.http.put(url, category, httpOptions);
  }
  getCantProductos(idCategory:number)
  {
    const url =this.categorysUrl+"/"+idCategory.toString()+"/cantProducts";
    return this.http.get<number>(url);

  }
}
  