import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  activeTab: string = 'request';
  leaveRequestForm: FormGroup;
  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Annual Leave'];

  constructor(private fb: FormBuilder) {
    this.leaveRequestForm = this.fb.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  submitLeaveRequest() {
    if (this.leaveRequestForm.valid) {
      console.log('Leave Request Data:', this.leaveRequestForm.value);
      alert('Leave request submitted successfully!');
      this.leaveRequestForm.reset();
    } else {
      alert('Please fill all the required fields.');
    }
  }
}
