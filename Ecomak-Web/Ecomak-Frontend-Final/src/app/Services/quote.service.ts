import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Quote } from '../Models/Quote'
import { ConstantsService } from './common/constants.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  QuotessUrl: string = this._constant.apiUrl+'api/quotes';
  constructor(private http:HttpClient,private _constant:ConstantsService) { }

  getQuotes():Observable<Quote[]>{
    return this.http.get<Quote[]>(this.QuotessUrl);
  }

  getQuote(id:number):Observable<Quote>{
    return this.http.get<Quote>(`${this.QuotessUrl}/${id}`);
  }

  deleteQuote(id:number){
    const url = `${this.QuotessUrl}/${id}`;
    return this.http.delete<Quote>(url,httpOptions);
  }

  addQuote(Quote:Quote):Observable<Quote>{
    let body = JSON.stringify(Quote);
    const a = this.http.post<Quote>(this.QuotessUrl, body, httpOptions);
    return a;
  }
}