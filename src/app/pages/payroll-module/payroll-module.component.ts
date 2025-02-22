import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; // Import the EmployeeService
import { AttendanceService } from '../../services/attendance.service';

@Component({
    selector: 'app-payroll-module',
    templateUrl: './payroll-module.component.html',
    styleUrls: ['./payroll-module.component.css']
})
export class PayrollModuleComponent implements OnInit {
    payrollData: any[] = [];
    employeeData: any[] = [];
    attendanceRecords: any[] = [];
    totalEmployees: number = 0;

    constructor(private employeeService: EmployeeService,
                private attendanceService: AttendanceService) { } // Inject the EmployeeService

    async ngOnInit() {
        // Initialization logic here
        await this.fetchEmployeeData();
        await this.fetchAttendanceRecords();
        this.fetchPayrollData();
    }

    fetchPayrollData(): void {
        // Fetch payroll data logic here
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        const currentYear = new Date().getFullYear();
        const paymentDate = new Date().toLocaleDateString('en-GB'); // Format date as dd-mm-yyyy
        this.payrollData = [
            { month: currentMonth, year: currentYear, totalEmployees: this.employeeData.length, paymentDate: paymentDate, amount: 1000 },
            // Add more data as needed
        ];
    }

    async fetchEmployeeData() {
        // Fetch employee data from the service
        this.employeeData = await this.employeeService.getEmployees().toPromise() || [];
        this.calculateTotalEmployees();
        console.log('this.employeeData =>', this.employeeData);
    }

    async fetchAttendanceRecords() {
        // Fetch attendance records logic here
        this.attendanceRecords = await this.attendanceService.getAttendanceRecords().toPromise() || [];
        console.log('this.attendanceRecords =>', this.attendanceRecords);
    }

    calculateTotalEmployees(): void {
        this.totalEmployees = this.employeeData.length;
    }

    processPayroll(payroll: any): void {
        // Logic to process payroll
        console.log('Processing payroll for', payroll);
        // Redirect to the payroll process page
        window.location.href = '/pages/payroll/payroll-process';
    }

    // Add your methods and properties for payroll module here

}