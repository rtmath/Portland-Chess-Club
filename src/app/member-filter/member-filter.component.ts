import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.css']
})

export class MemberFilterComponent implements OnInit {

  @Output() nameFilterSender = new EventEmitter();
  @Output() ratingFilterSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filter(name, rating) {
    this.nameFilterSender.emit(name);
    this.ratingFilterSender.emit(rating);
  }

}
