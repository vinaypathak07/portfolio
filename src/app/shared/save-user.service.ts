import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  constructor(private http: HttpClient) { }

  storeUser(users: User[]) {
     return this.http.post('https://portfolio-f59fc.firebaseio.com/data.json', users);
  }
}
