import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  getUserDetails(id: number) {
    return this._http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }
}
