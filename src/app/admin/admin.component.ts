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

  addNewMember(name: string, location: string, rating: number, bio: string) {
    if (this.isNotBlank(name, location, rating, bio)) {
      this.memberService.addMember(new Member(name, location, rating, bio));
      this.clearInputForms();
    } else {
      alert("Please fill out all required fields");
    }
  }

  isNotBlank(s1: string, s2: string, n1: number, s3: string) {
    if (s1 != null && s1 != "" &&
        s2 != null && s2 != "" &&
        n1 != null && n1 > 0 && 
        s3 != null && s3 != "") {
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
