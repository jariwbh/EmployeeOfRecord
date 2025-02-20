
import { RouterModule, Routes } from '@angular/router';
import { StaffProfileComponent } from './staff-profile.component';



const routes: Routes = [
  { path: '', component: StaffProfileComponent },
  { path: ':id', component: StaffProfileComponent }
];

export const routing = RouterModule.forChild(routes);
