import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'byRating',
  pure: false
})
export class ByRatingPipe implements PipeTransform {

  transform(a: Member[], rating: number): any {
    if (a != null && rating != null) {
      var output = [];
      for (var i = 0; i < a.length; i++) {
        if (a[i].rating >= rating) {
          output.push(a[i]);
        }
      }
      return output;
    }
  }

}
