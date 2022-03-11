import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ListItem } from './_models/listItem';
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

  items = null;

  constructor(private listService: ListService, public authService: AuthService) { }

  ngOnInit(): void {
    this.listService.getAllListItem()
    .pipe(first())
    .subscribe(items => this.items = items);
    setTimeout(() => this.authService.getUsername(), 100);
  }

  deleteListItem(id:number){
    const item = this.items.find(x=> x.id ===id);
    confirm('Are you sure you want to delete this item?') ?
    item.isDeleting = true && this.listService.deleteItem(id)
    .pipe(first())
    .subscribe(()=>this.items = this.items.filter(x=>x.id !== id)) : "";
  }

}
