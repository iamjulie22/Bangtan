import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Message } from "../_models/message";

const httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ChatService {


    constructor(private http: HttpClient) { }

    getAllMessages() {
        return this.http.get<Message[]>(`${environment.apiUrl}/messages`, httpOption);
    }

    addMessage(message:Message){
        return this.http.post<Message>(`${environment.apiUrl}/messages`,message,httpOption).pipe(
            tap(message=>console.log(`inserted message = ${JSON.stringify(message)}`)),
            catchError(error=>error)
        );
    }

    deleteChatMsg(id:number){
        return this.http.delete(`${environment.apiUrl}/messages/${id}`)
        .pipe(map(x=>{
            return x;
        }));
    }



}
