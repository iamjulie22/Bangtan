import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAllMembers(){
   return this.http.get<Member[]>(`${environment.apiUrl}/members`,httpOption);
  }

  getMemberById(memberId: Number){
    return this.http.get<Member>(`${environment.apiUrl}/members/${memberId}`,httpOption);
  }
}
