import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FilterPipe } from './filter.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StaffComponent,
    StudentComponent,
    AdduserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
