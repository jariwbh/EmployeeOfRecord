import { Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LeaveTypeListComponent } from './leave-type-list/leavetype-list.component';

export const LeaveRoutes: Routes = [
  { 
    path: '', component: LeaveComponent ,
  },
  {
    path: 'leave-request', component: LeaveRequestComponent,
  },

  {
    path: 'leavetype-list', component: LeaveTypeListComponent,
  },
  {
    path: 'leave-type', component: LeaveTypeComponent,
  },
  {
    path: 'leave-type/:id', component: LeaveTypeComponent,
  }
];
