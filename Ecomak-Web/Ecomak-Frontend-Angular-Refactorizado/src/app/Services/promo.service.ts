import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Promo } from '../Models/Promo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PromoService {

  PromosUrl: string = 'http://localhost:50455/a/api/promotions';
  constructor(private http:HttpClient) { }

  getPromos():Observable<Promo[]>{
    return this.http.get<Promo[]>(this.PromosUrl);
  }

  deletePromo(Promo:Promo):Observable<Promo>{
    const url =`${this.PromosUrl}/${Promo.id}`;
    return this.http.delete<Promo>(url, httpOptions);
  }

  addPromo(Promo:Promo):Observable<Promo>{
    let body = JSON.stringify(Promo);
    const a = this.http.post<Promo>(this.PromosUrl, body, httpOptions);
    return a;
  }
  
  getPromo(id:string):Observable<Promo> {
    return this.http.get<Promo>(`${this.PromosUrl}/${id}`);
  }

  editPromo(Promo:Promo):Observable<any>{
    const url=`${this.PromosUrl}/${Promo.id}`;
    return this.http.put(url,Promo,httpOptions)
  }
}