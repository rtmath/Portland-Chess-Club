import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  announcements: Announcement[] = [
    new Announcement("Casual Chess", ""),
    new Announcement("January Tuesday Quads Start January 3", "the on-site registration time has changed to 7:15-7:30pm"),
    new Announcement("Game in 60: January 28", ""),
    new Announcement("Quad 45: February 4", "this month’s Quad 45 is two weeks earlier than usual"),
    new Announcement("February Tuesday Quads Start February 7", "the on-site registration time has changed to 7:15-7:30pm"),
    new Announcement("Oregon State Championship and Invitational: February 11-12, 18-20", "information coming soon"),
    new Announcement('"How the US team won gold at the 2016 Chess Olympiad" - a talk by team captain John Donaldson"', ""),
    new Announcement("Game in 60: February 25", ""),
    new Announcement("1st Annual Neil Dale Memeorial Open: March 4-5", "We have rescheduled the 1st Annual Neil Dale Memorial Open to March 4-5 and combined it with the Portland Spring Open. The tournament will have two sections like the Spring Open does but will have the higher prize fund that was planned for the original Neil Dale Memorial. Neil volunteered countless hours to chess, including running hundreds of tournaments over many decades. We hope everyone can stop by to pay their respects and share some memories of Neil before the start of round 1. See an obituary of Neil here and a remembrance of Neil in the February edition of the Northwest Chess Magazine here. More information about the tournament coming soon."),
    new Announcement("March Tuesday Quads Start March 7", "the on-site registration time has changed to 7:15-7:30pm")
  ];

  constructor() { }

  ngOnInit() {
  }

}
