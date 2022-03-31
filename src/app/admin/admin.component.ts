import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Details } from '../details';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Admindetails: Details[] = [];
  textsearch = "";
  filter: any;
  isadmin: boolean = false;
  isstaff: boolean = false;
  isstudent: boolean = false;

  constructor(public data: DataService, public r: Router) {
    if (this.data.User.Usertype === "admin") {
      this.Admindetails = this.data.Alldetails;
  
    } else if (this.data.User.Usertype === "staff") {
      this.Admindetails = this.data.Alldetails.filter((x) => x.Usertype ==="student")
      this.isstaff = true;
      
    } else if (this.data.User.Usertype === "student") {
      this.Admindetails = this.data.Alldetails.filter((x) => x.Usertype !=="staff" && x.Usertype!=="admin")
      this.isstudent = true;
      
    }
  }
  ngOnInit(): void {
  }
  search(event: any) {
    if (event.target.value === "Alldetails"  && this.data.User.Usertype==="admin") {
      this.Admindetails = this.data.Alldetails;

    }else if (this.data.User.Usertype === "staff") {
      this.Admindetails= this.data.Alldetails.filter((x) => x.Usertype==="student")
      
    } else if (this.data.User.Usertype === "student") {
      this.Admindetails = this.data.Alldetails.filter((x) => x.Usertype !=="staff" && x.Usertype!=="admin")
    }
    else {
      this.Admindetails = this.data.Alldetails.filter((x) => x.Usertype === event.target.value);
    }
   
  }
  logout(){
    this.data.Logout();
  }
}
