import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('this.loginForm.value =>', this.loginForm.value);
    if (this.loginForm.valid) {
      this.employeeService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
        success => {
          console.log('success =>', success);
          if (success) {
            // Save employee data to local storage
            localStorage.setItem('employeeData', JSON.stringify(success));
            this.router.navigate(['pages/dashboard']);
          } else {
            alert('Login failed: Invalid username or password');
          }
        },
        error => {
          if (error.status === 404) {
            alert('Login failed: Endpoint not found');
          } else {
            alert('An error occurred: ' + error.message);
          }
        }
      );
    }
  }
}
