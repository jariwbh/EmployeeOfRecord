import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance-module',
  templateUrl: './attendance-module.component.html'
})
export class AttendanceModuleComponent implements OnInit {
  employees: any[] = [];
  attendanceForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService,
    private fb: FormBuilder
  ) {
    this.attendanceForm = this.fb.group({
      employeeId: ['', Validators.required],
      date: ['', Validators.required],
      checkin: ['', Validators.required],
      checkout: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
      console.log('this.employees =>', this.employees);
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const attendanceRecord = this.attendanceForm.value;
      this.convertToUTC(attendanceRecord);

      this.attendanceService.saveAttendance(attendanceRecord).subscribe(response => {
        console.log('Attendance Record Submitted:', response);
        this.attendanceForm.reset();
      }, error => {
        console.error('Error submitting attendance record:', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  private convertToUTC(attendanceRecord: any): void {
    const date = new Date(attendanceRecord.date);
    attendanceRecord.date = date.toISOString();

    const checkinTime = new Date(attendanceRecord.date);
    const [checkinHours, checkinMinutes] = attendanceRecord.checkin.split(':');
    checkinTime.setHours(parseInt(checkinHours, 10), parseInt(checkinMinutes, 10));
    attendanceRecord.checkin = checkinTime;

    const checkoutTime = new Date(attendanceRecord.date);
    const [checkoutHours, checkoutMinutes] = attendanceRecord.checkout.split(':');
    checkoutTime.setHours(parseInt(checkoutHours, 10), parseInt(checkoutMinutes, 10));
    attendanceRecord.checkout = checkoutTime;
  }
}
