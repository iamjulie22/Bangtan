import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Album } from "../_models/album";


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAllAlbums() {
    return this.http.get<Album[]>(`${environment.apiUrl}/albums`, httpOption);
  }

  getAlbumById(albumId: Number) {
    return this.http.get<Album>(`${environment.apiUrl}/albums/${albumId}`, httpOption);
  }
}