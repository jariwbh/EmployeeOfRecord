import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveTypeComponent } from './leave-type.component';
import { routing } from './leave-type.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LeaveTypeModule { }