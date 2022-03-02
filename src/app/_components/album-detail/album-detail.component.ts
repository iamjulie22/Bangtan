import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Album from 'src/app/_models/album';
import ListItem from 'src/app/_models/listItem';
import { AlbumService } from 'src/app/_services/album.service';
import { ListService } from 'src/app/_services/list.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;
  items: ListItem[] = [];
  // event:Event|undefined;s

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private location: Location, private listService: ListService) { }

  ngOnInit(): void {
    this.getAlbumById();
    this.getListItems();
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

  getListItems(): void {
    this.listService.getAllListItem().subscribe(data => this.items = data);
  }
  
  addOnClick(item: string) {
    let iteM: ListItem = {
      listItem: item
    }
    this.listService.addListItem(iteM).subscribe(() => {
      this.getListItems();
    });
  }

}
