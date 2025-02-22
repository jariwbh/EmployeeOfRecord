import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModuleComponent } from './calendar-module.component';
import { calendarRoutes } from './calendar-module.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CalendarModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(calendarRoutes),
    
  ]
})
export class CalendarModule { }
