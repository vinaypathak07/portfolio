import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor(private http: HttpClient) { }

  verifyEmail(email: string) {
    return this.http.get('http://apilayer.net/api/check?access_key=1fe561e36cb69518b86f787dbab0a22e&email=' + email + '&smtp=1&format=1');
  }
}
