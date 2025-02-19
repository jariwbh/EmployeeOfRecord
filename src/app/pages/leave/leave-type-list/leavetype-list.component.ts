import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../../services/leave-type.service'; // Import the service
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavetype-list',
  templateUrl: './leavetype-list.component.html',
  styleUrls: ['./leavetype-list.component.css']
})
export class LeaveTypeListComponent implements OnInit {
  leaveTypes: any[]  = [];

  constructor(private leaveTypeService: LeaveTypeService,
    private router: Router
  ) { } // Inject the service

  ngOnInit(): void {
    this.getLeaveTypes();
  }

  getLeaveTypes(): void {
    this.leaveTypeService.getLeaveTypes().subscribe((data) => {
      this.leaveTypes = data;
      console.log('this.leaveTypes =>', this.leaveTypes);
    });
  }

  editLeaveType(leavetypeData: any): void {
    console.log('leavetypeData =>', leavetypeData);
    this.router.navigate(['/pages/leave/leave-type/' + leavetypeData._id]);
  }

  deleteLeaveType(leavetype: any): void {
    console.log('leavetype =>', leavetype);
    this.leaveTypeService.deleteLeaveType(leavetype._id).subscribe(
      (response: any) => {
        console.log('Staff deleted successfully', response);
        this.getLeaveTypes(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting staff', error);
      }
    );
  }
}
