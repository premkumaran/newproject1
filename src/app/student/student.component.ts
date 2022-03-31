import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // Students: Details[] = [];
  constructor(public data: DataService, public router: Router) {
    // this.Students = this.data.Alldetails;
  }

  ngOnInit(): void {
  }
//   logout() {
//     this.data.Logout();
// }
}
