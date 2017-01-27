import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[] = [
    new Member("Bobby Fisher", "Portland, OR", 3000, "Sup")
  ];

  constructor() { }

  ngOnInit() {
  }

}
