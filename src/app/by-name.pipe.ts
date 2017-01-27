import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'byName',
  pure: false
})

export class ByNamePipe implements PipeTransform {

  transform(a:Member[], nameFilter: string): any {
    if (a != null && nameFilter != null) {
      var output: Member[] = [];
      for (var i = 0; i < a.length; i++) {
        if (a[i].name.includes(nameFilter)) {
          output.push(a[i]);
        }
      }
      return output;      
    }
  }

}
