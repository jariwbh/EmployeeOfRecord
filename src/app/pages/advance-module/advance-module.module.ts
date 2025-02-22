import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AdvanceModuleComponent } from './advance-module.component';
import { advanceroutes } from './advance-module.routing';
import { RouterModule } from '@angular/router';
import { AdvanceFormComponent } from './advance-form/advance-form.component';

@NgModule({
  declarations: [
    AdvanceModuleComponent,
    AdvanceFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(advanceroutes),
  ]
})
export class AdvanceModule { }
