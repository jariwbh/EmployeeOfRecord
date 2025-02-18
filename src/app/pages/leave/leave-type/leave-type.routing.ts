
import { RouterModule, Routes } from '@angular/router';
import { LeaveTypeComponent } from './leave-type.component';



const routes: Routes = [
  { path: '', component: LeaveTypeComponent },
  { path: ':id', component: LeaveTypeComponent }
];

export const routing = RouterModule.forChild(routes);
