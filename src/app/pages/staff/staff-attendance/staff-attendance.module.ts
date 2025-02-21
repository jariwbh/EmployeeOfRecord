import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffAttendanceComponent } from './staff-attendance.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendarModule
import { routing } from './staff-attendance.routing';

@NgModule({
  declarations: [
    StaffAttendanceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FullCalendarModule, // Add FullCalendarModule to imports
    routing
  ]
})
export class StaffAttendanceModule { }
