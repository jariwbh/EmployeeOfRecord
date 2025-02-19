import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveTypeService } from '../../../services/leave-type.service';
import { LeaveRequestService } from '../../../services/leave-request.service'; // Import the service

@Component({
    selector: 'app-leave-request',
    templateUrl: './leave-request.component.html',
    styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
    leaveRequestForm: FormGroup;
    leaveTypes: any[] = [];

    constructor(
        private leaveTypeService: LeaveTypeService,
        private leaveRequestService: LeaveRequestService // Inject the service
    ) {
        this.leaveRequestForm = new FormGroup({
            leaveType: new FormControl('', Validators.required),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
            reason: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.getLeaveTypes();
    }

    getLeaveTypes(): void {
        this.leaveTypeService.getLeaveTypes().subscribe((data: any) => {
            this.leaveTypes = data;
            console.log('this.leaveTypes =>', this.leaveTypes);
        });
    }

    onSubmit() {
        if (this.leaveRequestForm.valid) {
            this.leaveRequestService.createLeaveRequest(this.leaveRequestForm.value).subscribe(
                (response: any) => {
                    console.log('Leave request saved successfully', response);
                },
                (error: any) => {
                    console.error('Error saving leave request', error);
                }
            );
        }
    }
}
