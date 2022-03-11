import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError, map } from "rxjs/operators";
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

    deleteItem(id:number){
        return this.http.delete(`${environment.apiUrl}/list/${id}`)
        .pipe(map(x=>{
            return x;
        }));

    }
}