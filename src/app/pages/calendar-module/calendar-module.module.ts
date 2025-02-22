import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModuleComponent } from './calendar-module.component';
import { calendarRoutes } from './calendar-module.routing';
import { RouterModule } from '@angular/router';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    CalendarModuleComponent,
    HolidayCalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(calendarRoutes),
    FullCalendarModule
  ]
})
export class CalendarModule { }
