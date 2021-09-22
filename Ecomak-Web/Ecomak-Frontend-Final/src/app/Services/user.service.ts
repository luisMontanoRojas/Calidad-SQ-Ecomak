import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { ConstantsService } from './common/constants.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiUrl:string=this._constant.apiUrl;
    constructor(private http: HttpClient,private _constant:ConstantsService) { }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}users`);
    }
}