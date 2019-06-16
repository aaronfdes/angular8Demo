import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class DataBinding {

    user: { firstName: string, lastName: string };
    count:number;
    numbers:Array<number>;    

    constructor() {
        this.user = { firstName: 'aaron', lastName: 'fernandes' };
        this.count = 10;
        this.numbers = [1,2,3,4,5,6,7,8,9,10]; 
    }

    increment(){
        this.count++;
    }
}