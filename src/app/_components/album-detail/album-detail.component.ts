import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/_services/album.service';
import { ListService } from 'src/app/_services/list.service';
import { Location } from '@angular/common';
import { Album } from 'src/app/_models/album';
import { ListItem } from 'src/app/_models/listItem';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit {

  album!: Album;

  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location,
    private listService: ListService) { }

  ngOnInit(): void {
    this.getAlbumById();
  }

  getAlbumById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumById(id)
      .subscribe(album => this.album = album);
    return this.album;
  }

  goBack(): void {
    this.location.back();
  }

  addOnClick() {
    let obj: ListItem = {
      listItem: this.album.albumTitle
    }
    this.listService.addListItem(obj).subscribe(() => { });
  }
}
