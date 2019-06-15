import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService extends DataService {

  constructor(private http: HttpClient) {
    super();
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(environment.customer_api_url);
  }
  
  getCustomer(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(environment.customer_api_url + '/' + customerId);
  }
  
  addCustomer(customer: Customer) {
    return this.http.post(environment.customer_api_url, customer, { observe: 'response' });
  }
  
  updateCustomer(customer: Customer) {
    return this.http.put(environment.customer_api_url, customer, { observe: 'response' });
  }

  deleteCustomer(customerId: string) {
    return this.http.delete<Customer>(environment.customer_api_url + '/' + customerId, { observe: 'response' });
  }

}
