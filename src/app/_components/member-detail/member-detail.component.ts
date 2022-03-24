import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/_models/listItem';
import { Member } from 'src/app/_models/member';
import { ListService } from 'src/app/_services/list.service';
import { MemberService } from 'src/app/_services/member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member!: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private location: Location,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.getMemberById();
  }

  getMemberById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memberService.getMemberById(id)
      .subscribe(member => this.member= member);
  }

  goBack(): void {
    this.location.back();
  }
    
  addOnClick(title: string) {
    let obj: ListItem = {
      listItem: title
    }
    this.listService.addListItem(obj).subscribe(() => {});
}
}