import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { AdvanceService } from '../../../services/advance.service';

@Component({
  selector: 'app-advance-form',
  templateUrl: './advance-form.component.html',
  styleUrls: ['./advance-form.component.css']
})
export class AdvanceFormComponent implements OnInit {
  advanceForm: FormGroup;
  employees: any[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private advanceService: AdvanceService
  ) {
    this.advanceForm = this.fb.group({
      amount: ['', Validators.required],
      employee: ['', Validators.required],
      date: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(' this.employees  =>',  this.employees );
    });
  }

  onSubmit() {
    if (this.advanceForm.valid) {
      this.advanceService.saveAdvance(this.advanceForm.value).subscribe(response => {
        console.log('Advance saved:', response);
        // Handle successful save here
      }, error => {
        console.error('Error saving advance:', error);
        // Handle error here
      });
    }
  }
}
