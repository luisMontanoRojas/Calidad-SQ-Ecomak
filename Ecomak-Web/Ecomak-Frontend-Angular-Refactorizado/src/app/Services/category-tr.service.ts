import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
import { ProductTr } from '../Models/ProductTr';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CategoryTrService {

  categorysTrUrl:string = 'http://localhost:50455/a/api/categoriesTr';
  constructor(private http:HttpClient) { }
  
  
  getCategorysForTr():Observable<Category[]>{
    
    return this.http.get<Category[]>(this.categorysTrUrl);
  }
  getProductsTr(idCategory:number):Observable<ProductTr[]>{
    const url =this.categorysTrUrl+"/"+idCategory.toString()+"/trs";
    return this.http.get<ProductTr[]>(url);
  }

  categoryTradd(category:Category):Observable<Category>{
    return this.http.post<Category>(this.categorysTrUrl,category,httpOptions);

  }
 
  getCategoryTr(id:string):Observable<Category>{
     return this.http.get<Category>(`${this.categorysTrUrl}/${id}`);
  }

  deleteCategoryTr(category:Category){
    const url = `${this.categorysTrUrl}/${category.id}`;
    return this.http.delete<Category>(url,httpOptions);
  }
  
  editCategoryTr(category: Category): Observable<any> {
    const url = `${this.categorysTrUrl}/${category.id}`;
    return this.http.put(url, category, httpOptions);
  }
}