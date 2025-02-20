import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffProfileComponent } from './staff-profile.component';
import { routing } from './staff-profile.routing';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    StaffProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    MatExpansionModule
  ]
})
export class StaffProfileModule { }