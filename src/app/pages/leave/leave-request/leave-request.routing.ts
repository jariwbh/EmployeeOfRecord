
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestComponent } from './leave-request.component';



const routes: Routes = [
  { path: '', component: LeaveRequestComponent },
  { path: ':id', component: LeaveRequestComponent }
];

export const routing = RouterModule.forChild(routes);
