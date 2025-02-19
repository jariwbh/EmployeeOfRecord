import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveTypeService } from '../../../services/leave-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-leave-type',
    templateUrl: './leave-type.component.html',
    styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
    leaveTypeForm: FormGroup;
    bindId: any;

    constructor(private fb: FormBuilder, private leaveTypeService: LeaveTypeService,
        private router: Router,private _route: ActivatedRoute,
    ) {
        this.leaveTypeForm = this.fb.group({
            name: ['', Validators.required],
            // description: [''],
            maxDays: ['', [Validators.required, Validators.min(1)]]
        });
        this._route.params.forEach((params) => {
            console.log('params =>', params);
            this.bindId = params["id"];      
          });
          console.log('this.bindId =>', this.bindId);
     }

    ngOnInit(): void {
        if(this.bindId){
            this.getLeaveTypeById(this.bindId);
        }
        
    }

    getLeaveTypeById(id: string): void {
        this.leaveTypeService.getLeaveType(id).subscribe(response => {
            this.leaveTypeForm.patchValue(response);
            console.log('Leave type data fetched successfully', response);
        }, error => {
            console.error('Error fetching leave type data', error);
        });
    }

    onSubmit(): void {
        if (this.leaveTypeForm.valid) {
            this.leaveTypeService.createLeaveType(this.leaveTypeForm.value).subscribe(response => {
                console.log('Leave type created successfully', response);
                // Handle successful form submission logic here
                this.router.navigate(['/pages/leave/leavetype-list']);
            }, error => {
                console.error('Error creating leave type', error);
                // Handle error logic here
            });
        }
    }
}