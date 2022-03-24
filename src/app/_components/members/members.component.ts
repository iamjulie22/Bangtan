import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberService: MemberService, private location: Location) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getAllMembers()
      .subscribe(members => this.members = members);;
  }

  goBack(): void {
    this.location.back();
  }
}