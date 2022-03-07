import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Show } from "../_models/show";


const httpOption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
    providedIn:'root'
})

export class ShowService{
 
    constructor(private http:HttpClient){}

    getAllShows(){
        return this.http.get<Show[]>(`${environment.apiUrl}/shows`,httpOption);
    }


}