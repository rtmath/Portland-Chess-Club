import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';

@Injectable()
export class MemberService {

  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMembers() {
    return this.members;
  }

  getMemberByKey(keyId: string) {
    return this.angularFire.database.object('members/' + keyId);
  }

  updateMember(member) {
    var dbMember = this.getMemberByKey(member.$key);
    dbMember.update({
      name: member.name,
      location: member.location,
      rating: member.rating,
      bio: member.bio
    })
  }

  deleteMember(member) {
    var dbMember = this.getMemberByKey(member.$key);
    dbMember.remove();
  }

}
