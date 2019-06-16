import { Routes } from '@angular/router'
import { HelloComponent } from './hello.component';
import { DataBinding } from './data-binding.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

export const routes: Routes = [
    { path: "home", component: HelloComponent },
    { path: "binding", component: DataBinding },
    { path: "rxjs", component: RxjsComponent },
    { path: "cd", component: ChangeDetectionComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: DataBinding },

]