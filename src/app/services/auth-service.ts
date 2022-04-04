import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../constant/constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


/**
 * This class is for creating services related to user management
 */
export class AuthService {

    constructor(private readonly httpClient: HttpClient) {
    }

    /**
   * method to add user
   */
    public login(postData: Object): Observable<LoginModel> {
        const endPoint = 'Users/add';
        return this.httpClient.post<LoginModel>(`${endPoint}`, postData);
    }

}

