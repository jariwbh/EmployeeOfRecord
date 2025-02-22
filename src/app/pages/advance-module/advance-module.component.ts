import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-module',
  templateUrl: './advance-module.component.html'
})
export class AdvanceModuleComponent {
  constructor(private router: Router) {}

  navigateToAdvanceForm() {
    this.router.navigate(['/pages/advance/advance-form']);
  }
}
