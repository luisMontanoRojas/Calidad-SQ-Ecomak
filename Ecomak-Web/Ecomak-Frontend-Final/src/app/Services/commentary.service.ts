import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Commentary } from '../Models/Commentary';
import { ConstantsService } from './common/constants.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  CommentaryUrl: string = this._constant.apiUrl+'api/promotions';
  constructor(private http:HttpClient,private _constant:ConstantsService) { }

  getComentaries(id:string):Observable<Commentary[]>{
    return this.http.get<Commentary[]>(`${this.CommentaryUrl}/${id}/comments`);
  }

  deleteComment(id:string,Comment:Commentary):Observable<Commentary>{
    const url =`${this.CommentaryUrl}/${id}/comments/${Comment.id}`;
    return this.http.delete<Commentary>(url, httpOptions);
  }

  addComment(id:string,Comment:Commentary):Observable<Commentary>{
    let body = JSON.stringify(Comment);
    const a = this.http.post<Commentary>(`${this.CommentaryUrl}/${id}/comments`, body, httpOptions);
    return a;
  }
  
  getComment(id:string,Comment:Commentary):Observable<Commentary> {
    return this.http.get<Commentary>(`${this.CommentaryUrl}/${id}/comments/${Comment.id}`);
  }

  editComment(Comment:Commentary):Observable<any>{
    const url=`${this.CommentaryUrl}/${Comment.promotionId}/comments/${Comment.id}`;
    return this.http.put(url,Comment,httpOptions)

  }

}
