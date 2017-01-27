import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { ByNamePipe } from '../by-name.pipe';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [ MemberService]
})

export class MemberListComponent implements OnInit {

  nameFilter: string = "";
  ratingFilter: number;

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  viewDetails(member) {
    this.router.navigate(['members', member.$key]);
  }

  setNameFilter(name: string) {
    this.nameFilter = name;
  }

  setRatingFilter(rating: number) {
    this.ratingFilter = rating;
  }
}
