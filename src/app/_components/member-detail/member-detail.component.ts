import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
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
    private location: Location
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
}
