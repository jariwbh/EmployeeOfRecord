import { Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';

export const LeaveRoutes: Routes = [
  { 
    path: '', component: LeaveComponent ,
  },
  {
    path: 'leave-request', component: LeaveRequestComponent,
  },
  {
    path: 'leave-type', component: LeaveTypeComponent,
  }
];
