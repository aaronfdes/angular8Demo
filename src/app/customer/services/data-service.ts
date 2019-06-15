import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

export abstract class DataService {
    abstract getCustomers(): Observable<Array<Customer>>;
    abstract getCustomer(customerId: string): Observable<Customer>;
    abstract addCustomer(customer: Customer);
    abstract updateCustomer(customer: Customer);
    abstract deleteCustomer(customerId: string);
}