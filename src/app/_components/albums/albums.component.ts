import { Component, OnInit } from '@angular/core';
import Album from 'src/app/_models/album';
import { AlbumService } from 'src/app/_services/album.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[]=[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums():void{
    this.albumService.getAllAlbums().subscribe(data=>this.albums = data);
  }
}
