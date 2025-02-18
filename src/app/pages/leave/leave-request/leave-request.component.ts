import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-leave-request',
    templateUrl: './leave-request.component.html',
    styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
    leaveRequestForm: FormGroup;

    constructor() {
        this.leaveRequestForm = new FormGroup({
            leaveType: new FormControl('', Validators.required),
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
            reason: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        
    }

    onSubmit() {
        if (this.leaveRequestForm.valid) {
            console.log(this.leaveRequestForm.value);
        }
    }
}
