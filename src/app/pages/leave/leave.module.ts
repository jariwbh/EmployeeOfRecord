import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { LeaveRoutes } from './leave.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';

@NgModule({
  declarations: [
    LeaveComponent,
    LeaveRequestComponent,
    LeaveTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LeaveRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeaveModule { }
