import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck, EventEmitter, Output } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input()
  customer: Customer;
  temp: Customer = new Customer();

  @Output()
  saved: EventEmitter<Customer> = new EventEmitter();

  @Output()
  cancelled: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('edit constructor called');
  }

  ngOnInit(): void {
    console.log('init called');
  }

  ngOnChanges(): void {
    console.log('changed called');
    this.temp = new Customer(this.customer.id, this.customer.name, this.customer.location)
    // this.temp = {...this.customer}; // using es6 spread operator
    // this.temp = Object.create(this.customer);
  }

  ngOnDestroy(): void {
    console.log('destroy called');
  }

  ngDoCheck(): void {
    console.log('do check called');
  }

  save() {
    // Object.assign(this.customer, this.temp);
    this.saved.emit(this.temp);
  }

  cancel() {
    this.cancelled.emit('cancelled');
  }

}
