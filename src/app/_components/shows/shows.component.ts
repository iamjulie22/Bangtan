import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/_models/listItem';
import { Show } from 'src/app/_models/show';
import { ListService } from 'src/app/_services/list.service';
import { ShowService } from 'src/app/_services/show.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: Show[] = [];
  items: ListItem[] = [];

  constructor(private showService: ShowService,private location: Location,private listService: ListService) { }

  ngOnInit(): void {
    this.getShows();
    this.getListItems();
  }

  getShows(): void {
    this.showService.getAllShows().subscribe(data => this.shows = data);
  }

  goBack(): void {
    this.location.back();
  }
  getListItems(): void {
    this.listService.getAllListItem().subscribe(data => this.items = data); //nem jó
  }
  
  addOnClick(title: string) {
    let obj: ListItem = {
      listItem: title
    }
    this.listService.addListItem(obj).subscribe(() => {
      this.getListItems(); //nem működik 
    });
}

}
