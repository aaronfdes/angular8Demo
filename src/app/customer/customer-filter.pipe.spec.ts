import { CustomerFilterPipe } from './customer-filter.pipe';
import { Customer } from './model/customer';

describe('CustomerFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should retun the input array if searchKey is undefined', () => {
    const pipe = new CustomerFilterPipe();
    const input: Array<Customer> = [new Customer(1, "aaron"), new Customer(2, "sujay")];
    var searchKey;
    const output = pipe.transform(input, searchKey);

    expect(output).toBe(input);
  });

  it('should retun the filtered input array if searchKey is present in the input array', () => {
    const pipe = new CustomerFilterPipe();
    const input: Array<Customer> = [new Customer(1, "aaron"), new Customer(2, "sujay")];
    var searchKey = 'aro';
    const output = pipe.transform(input, searchKey);

    expect(output.length).toBe(1);
    expect(output[0].id).toBe(1);
  });
});
