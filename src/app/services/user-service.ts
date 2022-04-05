import { UserListModel, UserModel } from '../constant/constants';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


/**
 * This class is for creating services related to user management
 */
export class UserService {

    studentList: UserListModel[] = []

    constructor(private readonly httpClient: HttpClient) {
        this.studentList = [
            {
                firstName: 'John',
                lastName: 'Doe',
                class: '2',
                rollNumber: '12345'
            },
            {
                firstName: 'Test',
                lastName: 'User',
                class: '3',
                rollNumber: '12346'
            }
        ]
    }

    /**
   * method to add student
   */
    public addStudent(postData: Object): Observable<UserModel> {
        const endPoint = 'Users/add';
        return this.httpClient.post<UserModel>(`${endPoint}`, postData);
    }



    /**
    * method to edit student
    */
    public editStudent(postData: Object) {
        const endPoint = 'Users/update';
        return this.httpClient.post(`${endPoint}`, postData);
    }

    /**
     * method to delete student
     */
    public deleteStudent(data: Object) {
        const endPoint = 'Users/delete';
        return this.httpClient.post(`${endPoint}`, data);
    }

}

