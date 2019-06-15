import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'customerColumnFilter'
})
export class CustomerColumnFilterPipe implements PipeTransform {

  transform(input: Array<Customer>, searchCriteria?: { key: string, columnName: string }): Array<Customer> {
    switch (searchCriteria.columnName) {
      case 'id':
        return input.filter(x => x.id.toString().toLowerCase().includes(searchCriteria.key.toLowerCase()));
      case 'name':
        return input.filter(x => x.name.toString().toLowerCase().includes(searchCriteria.key.toLowerCase()));
      case 'location':
        return input.filter(x => x.location.toString().toLowerCase().includes(searchCriteria.key.toLowerCase()));
      default:
        return input;
    }

  }

}
