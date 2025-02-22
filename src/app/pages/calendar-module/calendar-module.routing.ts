import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModuleComponent } from './calendar-module.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';

export const calendarRoutes: Routes = [
  { path: '', component: CalendarModuleComponent },
  { path: 'holiday', component: HolidayCalendarComponent },
  
];

