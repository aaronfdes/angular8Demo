import { Component, OnInit } from '@angular/core';
import { interval, timer, Observable } from 'rxjs';
import { tap, take, share, filter, map, debounce, debounceTime } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms'
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  searchFormControl: FormControl;
  results: Array<string>;
  searchObserver: Observable<any>;

  constructor(private http: HttpClient) {

    // const numbers = interval(1000);
    const numbers = timer(5000, 1000);
    const numbersObs = numbers.pipe(
      take(10),
      tap(x => console.log('tap:', x)),
      filter(x => x % 2 == 0),
      map(x => x * x),
      share()
    )
    // numbersObs.subscribe(r => console.log("S1", r));
    // numbersObs.subscribe(r => console.log("S2", r));

  }

  ngOnInit() {

    //initial value, list of client side validators, list of server side validators
    this.searchFormControl = new FormControl("", [Validators.required, Validators.minLength(3)], []);
    this.searchFormControl
      .valueChanges
      .pipe(
        debounceTime(500),
        filter(x => this.searchFormControl.valid)
      )
      .subscribe(value => {
        const url = "https://en.wikipedia.org/w/api.php";//?action=opensearch&format=json&search=angular"
        const urlParams = new HttpParams()
          .set("action", "opensearch")
          .set("format", "json")
          .set("limit", "20")
          .set("origin", "*")
          .set("search", value);
        this.searchObserver = this.http.get(url, { params: urlParams, observe: 'body' }).pipe(map(x => x[1]), share());

        // //simple subscriber
        // this.searchObserver
        //   .pipe(
        //     map(x => x[1])
        //   ).subscribe(results => {
        //     this.results = results;
        //   });

      });
  }

}
