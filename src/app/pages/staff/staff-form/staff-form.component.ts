import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {
  
  staffForm: FormGroup;
  designations: string[] = ['Manager', 'Developer', 'Designer', 'Tester', 'HR'];
  bindId: string = '';

  constructor(private fb: FormBuilder,
     private employeeService: EmployeeService,
     private _route: ActivatedRoute,
     private router: Router,) { 
    this.staffForm = this.fb.group({
      fullname: new FormControl(''),
      designation: new FormControl(''),
      phonenumber: new FormControl(''),
      email: new FormControl(''),
      dateofbirth: new FormControl(''),
      joiningdate: new FormControl('')
    });
    this._route.params.forEach((params) => {
      console.log('params =>', params);
      this.bindId = params["id"];      
    });
    console.log('this.bindId =>', this.bindId);
  }

  ngOnInit(): void {
    if(this.bindId){
      this.getEmployeeById(this.bindId);
    }
    
  }

  getEmployeeById(id: string): void { 
    this.employeeService.getEmployeeById(id).subscribe(
      (data: any) => {
        console.log('data =>', data);
        this.staffForm.patchValue({
          fullname: data.fullname,
          designation: data.designation,
          phonenumber: data.phonenumber,
          email: data.email,
          dateofbirth: data && data.dateofbirth ? new Date(data.dateofbirth).toISOString().substring(0, 10) : data?.dateofbirth,
          joiningdate: data && data.joiningdate ? new Date(data.joiningdate).toISOString().substring(0, 10) : data?.joiningdate
        });
        console.log('this.staffForm =>', this.staffForm);
      },
      (error) => {
        console.error('Error fetching staff', error);
      }
    );
  } 

  onSubmit(){   
    console.log('this.staffForm.value =>', this.staffForm.value);
    if(this.bindId){
      if (this.staffForm.valid) {
        console.log('Form is valid, calling updateEmployee');
        this.employeeService.updateEmployee(this.bindId, this.staffForm.value).subscribe(() => {
          console.log('Employee updated successfully');
          this.router.navigate(['/pages/staff/staff-list']);
      });
      } else {
        console.log('Form is invalid');
        alert('Please fill out the form correctly.');
      }
    } else {
      if (this.staffForm.valid) {
        console.log('Form is valid, calling saveEmployee');
         this.employeeService.addEmployee(this.staffForm.value).subscribe(() => {
          this.router.navigate(['/pages/staff/staff-list']);

      });
      } else {
        console.log('Form is invalid');
        alert('Please fill out the form correctly.');
      }
    }
    
  }
}
