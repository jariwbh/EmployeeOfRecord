import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html'
})
export class StaffListComponent implements OnInit {
  staffList: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router,) {}

  ngOnInit(): void {
    this.loadStaffList();
  }

  loadStaffList(): void {
    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        this.staffList = data;
        console.log('this.staffList =>', this.staffList);
      },
      (error) => {
        if (error.status === 404) {
          console.error('API not found', error);
        } else {
          console.error('Error fetching staff list', error);
        }
      }
    );
  }

  editStaff(staffData: any): void {
    console.log('staffData =>', staffData);
    this.router.navigate(['/pages/staff/staff-form/' + staffData._id]);
  }

  deleteStaff(staffId: any): void {
    console.log('staffId =>', staffId);
    this.employeeService.deleteEmployee(staffId._id).subscribe(
      (response: any) => {
        console.log('Staff deleted successfully', response);
        this.loadStaffList(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting staff', error);
      }
    );
  }
}
