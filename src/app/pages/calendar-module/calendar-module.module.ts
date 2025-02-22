import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModuleComponent } from './calendar-module.component';
import { calendarRoutes } from './calendar-module.routing';
import { RouterModule } from '@angular/router';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component';

@NgModule({
  declarations: [
    CalendarModuleComponent,
    HolidayCalendarComponent,
    AttendanceCalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(calendarRoutes),
    FullCalendarModule
  ]
})
export class CalendarModule { }
