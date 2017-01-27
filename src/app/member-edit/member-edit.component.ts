import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';


@Component({
  selector: 'member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  providers: [MemberService]
})

export class MemberEditComponent implements OnInit {

  @Input() selectedMember: Member = null;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

  saveChanges(member) {
    this.memberService.updateMember(member);
  }

  deleteMember(member) {
    if (confirm("Are you sure you want to delete this member from the club roster?")) {
      this.memberService.deleteMember(member);
    }
  }

}
