import { Routes, RouterModule } from '@angular/router';
import { StaffAttendanceComponent } from './staff-attendance.component';

const routes: Routes = [
  { path: '', component: StaffAttendanceComponent }
];

export const routing = RouterModule.forChild(routes);
    