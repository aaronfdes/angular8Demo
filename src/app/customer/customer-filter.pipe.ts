import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(input: Array<Customer>, searchCriteria?: string): Array<Customer> {
    if (!searchCriteria) {
      return input;
    }
    return input.filter(x => (x.id + ' ' + x.name + ' ' + x.location).toLowerCase().includes(searchCriteria.toLowerCase()))
  }

}
