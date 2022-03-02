import { Component, OnInit } from '@angular/core';
import Show from 'src/app/_models/show';
import { ShowService } from 'src/app/_services/show.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: Show[] = [];

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.showService.getAllShows().subscribe(data => this.shows = data);
  }

}
