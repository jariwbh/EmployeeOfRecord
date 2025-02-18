import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-leave-type',
    templateUrl: './leave-type.component.html',
    styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
    leaveTypeForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.leaveTypeForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            maxDays: ['', [Validators.required, Validators.min(1)]]
        });
     }

    ngOnInit(): void {
        
    }

    onSubmit(): void {
        if (this.leaveTypeForm.valid) {
            console.log(this.leaveTypeForm.value);
            // Handle form submission logic here
        }
    }
}