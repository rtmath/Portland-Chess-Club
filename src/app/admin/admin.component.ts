import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  addNewMember(name: string, location: string, rating: string, bio: string) {
    if (this.isNotBlank(name, location, rating, bio)) {
      this.memberService.addMember(new Member(name, location, rating, bio));
      this.clearInputForms();
    }
  }

  isNotBlank(s1: string, s2: string, s3: string, s4: string) {
    if (s1 != null && s1 != "" &&
        s2 != null && s2 != "" &&
        s3 != null && s3 != "" &&
        s4 != null && s4 != "") {
      return true;
    } else {
      return false;
    }
  }

  @ViewChild('newName') formName: ElementRef;
  @ViewChild('newLocation') formLocation: ElementRef;
  @ViewChild('newRating') formRating: ElementRef;
  @ViewChild('newBio') formBio: ElementRef;

  clearInputForms() {
    this.formName.nativeElement.value = '';
    this.formLocation.nativeElement.value = '';
    this.formRating.nativeElement.value = '';
    this.formBio.nativeElement.value = '';
  }
}
