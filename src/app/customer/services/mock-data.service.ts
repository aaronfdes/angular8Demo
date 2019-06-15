import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class MockDataService extends DataService {

  constructor() {
    super();
  }

  getCustomers(): Observable<Array<Customer>> {
    let data = new Array<Customer>();
    data.push(new Customer(1, "aaron", "Charni Road"));
    data.push(new Customer(2, "sujay", "Kandivili"));
    data.push(new Customer(3, "mahesh", "Kandivili"));
    data.push(new Customer(4, "vikash", "Dombivili"));
    data.push(new Customer(5, "Gaurav", "Dockyard"));
    data.push(new Customer(6, "Nitin", "Kalyan"));
    data.push(new Customer(7, "Prachi", "Dadar"));
    data.push(new Customer(8, "Virendra", "Thane"));
    data.push(new Customer(9, "Swapnil", "Bhandup"));
    data.push(new Customer(10, "Vikas", "Kharghar"));
    data.push(new Customer(11, "Mahedra", "Nerul"));
    return new Observable();
  }

  getCustomer(customerId: string): Observable<Customer> {
    throw new Error("Method not implemented.");
  }
  addCustomer(customer: Customer) {
    throw new Error("Method not implemented.");
  }
  updateCustomer(customer: Customer) {
    throw new Error("Method not implemented.");
  }
  deleteCustomer(customerId: string) {
    throw new Error("Method not implemented.");
  }
}
