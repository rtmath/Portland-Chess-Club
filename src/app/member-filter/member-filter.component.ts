import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.css']
})

export class MemberFilterComponent implements OnInit {

  @Input() currentNameFilter: string;
  @Input() currentRatingFilter: number;
  @Output() nameFilterSender = new EventEmitter();
  @Output() ratingFilterSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeName() {
      this.nameFilterSender.emit(this.currentNameFilter);
  }

  changeRating() {
    this.ratingFilterSender.emit(this.currentRatingFilter);
  }

}
