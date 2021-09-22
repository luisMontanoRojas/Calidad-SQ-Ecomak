import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/User';
import { isNullOrUndefined } from 'util';
import { ConstantsService } from './common/constants.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    apiUrl:string

    constructor(private http: HttpClient,_constant:ConstantsService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.apiUrl=_constant.apiUrl+'api/Authentication/';
    }


    public get currentUserValue(): User {
        let user_string = localStorage.getItem("currentUser");
        if(!isNullOrUndefined(user_string)){
            let user: User = JSON.parse(user_string);
            return user;
        }
        else{
            return null;
        }
    }
    validateToken(){
        return this.http.get<any>(`${this.apiUrl}ValidateToken`, { })
    }

    login(Name: string, Password: string) {
        return this.http.post<any>(`${this.apiUrl}Login`, { Name, Password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}