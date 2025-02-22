import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceModuleComponent } from './advance-module.component';
import { AdvanceFormComponent } from './advance-form/advance-form.component';

export const advanceroutes: Routes = [
  { path: '', component: AdvanceModuleComponent },
  { path: 'advance-form', component: AdvanceFormComponent }
];

