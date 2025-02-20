import { Routes } from '@angular/router';
import { AttendanceModuleComponent } from './attendance-module.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';

export const AttendanceModuleRoutes: Routes = [
  { path: '', component: AttendanceModuleComponent },
  { path: 'attendance-form', component: AttendanceFormComponent }

];
