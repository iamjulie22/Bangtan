import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ListItem } from "../_models/listItem";


const httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ListService {

    constructor(private http: HttpClient) { }

    getAllListItem() {
        return this.http.get<ListItem[]>(`${environment.apiUrl}/list`, httpOption);
    }

    addListItem(item: ListItem) {
        return this.http.post<ListItem>(`${environment.apiUrl}/list`,item,httpOption).pipe(
        tap(item => console.log(`inserted item = ${JSON.stringify(item)}`)),
        catchError(error => error));

    }

    deleteItem(itemId: Number) {
        return this.http.delete<ListItem>(`${environment.apiUrl}/list/${itemId}`,httpOption).pipe(
          tap(() => console.log(`deleted item with id = ${itemId}`)),
          catchError(error => error)
        )
      }
}