import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interface SimpleData {
  id: number;
  color: string;
}

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, AfterViewInit {

  data: Array<SimpleData> = [{ id: 1, color: 'red' }, { id: 2, color: 'blue' }, { id: 3, color: 'green' }];
  colors: Array<string> = ['yellow', 'black', 'white', 'maroon'];

  counter: number;

  constructor(private detectorRef: ChangeDetectorRef) { }

  ngOnInit() {

    interval().pipe(
      take(10000)
    ).subscribe(value => {
      this.counter = value;
      if (this.counter % 100 == 0) {
        this.detectorRef.detectChanges();
      }
    })
  }

  ngAfterViewInit() {
    this.detectorRef.detach();
  }


  change() {
    const index = Math.floor(Math.random() * Math.floor(3));

    //only changing the attribute of an existing object
    // this.data[index].color = this.colors[Math.floor(Math.random() * Math.floor(4))];

    // create a new object at this index so change detection is triggered
    this.data[index] = { ...this.data[index], color: this.colors[Math.floor(Math.random() * Math.floor(4))] };
  }

}

@Component({
  selector: 'simple',
  template: `<div [style.background-color]="simpleData.color">
    <p>ID: {{simpleData.id}}</p>
    <p>Color: {{simpleData.color}}</p>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleComponent implements OnInit {

  @Input()
  simpleData: SimpleData;


  constructor() { }

  ngOnInit() {

  }


}

