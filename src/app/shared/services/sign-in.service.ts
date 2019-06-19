import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private url = 'http://localhost:5000/Login';
  public data;
  async getUserFromRequest(login, password) {
     return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        this.data = JSON.stringify(response);
        console.log(56, this.data);
        return this.data;
      });
  }
  public getStatus() {
    console.log(65, this.data);
    return this.data;
  }
  constructor(private http: HttpClient) {}
}
