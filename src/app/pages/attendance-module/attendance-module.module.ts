import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceModuleComponent } from './attendance-module.component';
import { AttendanceModuleRoutes } from './attendance-module.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [AttendanceModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AttendanceModuleRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class AttendanceModule { }
