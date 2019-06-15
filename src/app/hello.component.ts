import { Component } from '@angular/core';

@Component({
    selector: 'hello-component',
    template: `<h2 style='background-color:red' appHightlight="green">Hello <span appHightlight>{{name | uppercase}}</span></h2>
               <h3 appHightlight="cyan"> The app was loaded at  {{date | date:'medium' | uppercase}} </h3>
            `
})
export class HelloComponent {
    name = 'aaron'
    date = Date.now();
}