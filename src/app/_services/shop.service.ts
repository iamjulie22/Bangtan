import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../_models/user';



const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  qty: number = 0;
  temp: boolean;

  constructor(private http: HttpClient) { }

  helper() {
    setTimeout(() => {
      if (this.qty) {
        this.temp = true;
      } else {
        this.temp = false;
      }
    }, 300);
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, httpOption);
  }

  getUserById(id) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`, httpOption);
  }

  deleteUser(id) {
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`, httpOption).pipe(
      tap(() => console.log(`Removed from users = ${id}`)),
      catchError(error => error)
    );
  }

  updateUser(user: User) {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user, httpOption).pipe(
      tap(() => console.log(`Changed password for = ${user.id}`)),
      catchError(error => error)
    );
  }

  addUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/users`, user, httpOption).pipe(
      tap((user: User) => console.log(`Added user = ${JSON.stringify(user)}`)),
      catchError(error => error)
    );
  }
}
