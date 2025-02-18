import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestComponent } from './leave-request.component';
import { routing } from './leave-request.routing';
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
export class LeaveRequestModule { }