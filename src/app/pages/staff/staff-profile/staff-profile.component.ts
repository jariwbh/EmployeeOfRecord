import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {
  staff: any;
  staffId: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private _route: ActivatedRoute,
  ) {
    this._route.params.forEach((params) => {
        console.log('params =>', params);
        this.staffId = params["id"];      
      });
      console.log('this.staffId =>', this.staffId);
  }

  ngOnInit(): void {
    const staffId = this.route.snapshot.paramMap.get('id');
    if (staffId) {
      this.getStaffProfile(staffId);
    } else {
      console.error('Staff ID is null');
    }
  }

  getStaffProfile(id: string): void {
    this.employeeService.getEmployeeById(id).subscribe((data: any) => {
      this.staff = data;
      console.log('Staff Profile:', this.staff);
    }, (error: any) => {
      console.error('Error fetching staff profile:', error);
    });
  }
}