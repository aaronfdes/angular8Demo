import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Array<Customer>;
  newCustomer: Customer = new Customer();
  selectedCustomer: Customer;
  searchKey: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.data = new Array();
    this.loadCustomerData();
  }

  private loadCustomerData() {
    this.dataService.getCustomers().subscribe(data => this.data = data, error => console.log("Could not retrieve customer data"));
  }

  save() {
    this.dataService.addCustomer(this.newCustomer)
      .subscribe(
        response => {
          this.loadCustomerData();
          this.newCustomer = new Customer();
        },
        error => {
          alert('Could not save customer : ' + error.statusText);
        });

  }

  delete(e, customerId) {
    this.dataService.deleteCustomer(customerId).subscribe(res => {
      this.loadCustomerData();
    },
      error => { alert('Could not delete customer : ' + error.statusText); });
    e.preventDefault();
  }


  edit(e, cust) {
    this.selectedCustomer = cust;
    //this.selectedCustomer = new Customer(cust.id, cust.name, cust.location);
    e.preventDefault();
  }

  editedCustomer(evt) {
    console.log(evt);
    Object.assign(this.selectedCustomer, evt);
    this.dataService.updateCustomer(this.selectedCustomer)
      .subscribe(
        response => {
          this.loadCustomerData();
          this.selectedCustomer = null;
        },
        error => {
          alert('Could not update customer : ' + error.statusText);
          this.selectedCustomer = null;
        });

  }

  cancelledSaved(evt) {
    console.log(evt);
    this.selectedCustomer = null;
  }

}
