import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  employeeData: any;

  constructor() { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    const data = localStorage.getItem('employeeData');
    console.log('data =>', data);
    if (data) {
      this.employeeData = JSON.parse(data);
    } else {
      console.log('No employee data found in local storage');
    }
  }
}
