import { Routes } from '@angular/router'
import { HelloComponent } from './hello.component';
import { DataBinding } from './data-binding.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
    { path: "home", component: HelloComponent },
    { path: "binding", component: DataBinding },
    { path: "rxjs", component: RxjsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: DataBinding },

]