import { Component, OnInit } from '@angular/core';
import ListItem from './_models/listItem';
import { AuthService } from './_services/auth.service';
import { ListService } from './_services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A Guide To Bangtan';
  bandName = 'BTS';

  items: ListItem[] = [];

  constructor(private listService: ListService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getListItems();
    setTimeout(() => this.authService.getUsername(), 100);
  }

  getListItems(): void {
    this.listService.getAllListItem().subscribe(data => this.items = data);
  }
  
  // delete(id:number){
  //   confirm("Are you sure you want to delete this hero?")? this.listService.deleteItem(id).subscribe(
  //     () => this.getListItems())
  //   :"";

  // }

}
