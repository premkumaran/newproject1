import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Details } from '../details';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  // Staffs: Details[] = [];
  constructor(public data: DataService, public router: Router) {
    // this.Staffs = this.data.Alldetails;
  }

  ngOnInit(): void {
  }

  // logout(){
  //   this.data.Logout();
  // }
}
