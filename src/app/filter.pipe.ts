import { Pipe, PipeTransform } from '@angular/core';
import { Details } from './details';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: Details[], text:string): Details[] {
    let Filter: Details[] = [];
    
      for (let index = 0; index < value.length; index++) {
        if (value[index].Username && value[index].Username.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
          Filter.push(value[index]);
          
        }
        //else if (value[index].Username === undefined) {
        //   Filter.push(value[index]);
        // }
        // return value;
         
      }
    return Filter;
    }

}
