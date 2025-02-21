import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffProfileComponent } from './staff-profile.component';
import { routing } from './staff-profile.routing';
import { MatExpansionModule } from '@angular/material/expansion';
import { StaffSalaryComponent } from './staff-salary/staff-salary.component';
import { StaffAttendanceComponent } from '../staff-attendance/staff-attendance.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendarModule

@NgModule({
  declarations: [
    StaffProfileComponent,
    StaffSalaryComponent,
    StaffAttendanceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    MatExpansionModule,
    FullCalendarModule // Add FullCalendarModule to imports
  ]
})
export class StaffProfileModule { }