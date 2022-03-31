import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AccessGuard } from './access.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "admin", component: AdminComponent,canActivate:[AccessGuard] },
  { path: "staff", component: AdminComponent,canActivate:[AccessGuard] },
  { path: "student", component: AdminComponent,canActivate:[AccessGuard] },
  { path: "adduser", component: AdduserComponent ,canActivate:[AccessGuard]},
  { path: "", redirectTo: "/login", pathMatch: "full" },
  //{ path: "**", redirectTo: "/login" },
  //{path:"**",component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
