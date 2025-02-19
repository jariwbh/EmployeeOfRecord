import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveTypeService } from '../../../services/leave-type.service';

@Component({
    selector: 'app-leave-type',
    templateUrl: './leave-type.component.html',
    styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
    leaveTypeForm: FormGroup;

    constructor(private fb: FormBuilder, private leaveTypeService: LeaveTypeService) {
        this.leaveTypeForm = this.fb.group({
            name: ['', Validators.required],
            // description: [''],
            maxDays: ['', [Validators.required, Validators.min(1)]]
        });
     }

    ngOnInit(): void {
        
    }

    onSubmit(): void {
        if (this.leaveTypeForm.valid) {
            this.leaveTypeService.createLeaveType(this.leaveTypeForm.value).subscribe(response => {
                console.log('Leave type created successfully', response);
                // Handle successful form submission logic here
            }, error => {
                console.error('Error creating leave type', error);
                // Handle error logic here
            });
        }
    }
}