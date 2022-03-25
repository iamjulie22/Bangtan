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

  constructor(private showService: ShowService, private location: Location, private listService: ListService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.showService.getAllShows().subscribe(data => this.shows = data);
  }

  goBack(): void {
    this.location.back();
  }

  addOnClick(title: string) {
    let obj: ListItem = {
      listItem: title
    }
    this.listService.addListItem(obj).subscribe(() => { });
  }
}