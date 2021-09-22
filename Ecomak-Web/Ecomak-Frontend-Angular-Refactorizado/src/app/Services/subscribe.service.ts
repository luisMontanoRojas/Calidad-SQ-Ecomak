import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscribe } from '../Models/Subscribe';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  SubscribesUrl:string = 'http://localhost:50455/a/api/subscribes';
  constructor(private http:HttpClient) { }
  
  getSubscribes():Observable<Subscribe[]>{
    return this.http.get<Subscribe[]>(this.SubscribesUrl);
  }
  getProductsForTr():Observable<Subscribe[]>{
    return this.http.get<Subscribe[]>(this.SubscribesUrl);
  }

  Subscribeadd(Subscribe:Subscribe):Observable<Subscribe>{
    return this.http.post<Subscribe>(this.SubscribesUrl,Subscribe,httpOptions); 
  }

  getSubscribe(id:string):Observable<Subscribe>{
     return this.http.get<Subscribe>(`${this.SubscribesUrl}/${id}`);
  }

  deleteSubscribe(Subscribe:Subscribe){
    const url = `${this.SubscribesUrl}/${Subscribe.id}`;
    return this.http.delete<Subscribe>(url,httpOptions);
  }
  
  editSubscribe(Subscribe: Subscribe): Observable<any> {
    const url = `${this.SubscribesUrl}/${Subscribe.id}`;
    return this.http.put(url, Subscribe, httpOptions);
  }
}