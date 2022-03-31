import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Details } from '../details';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  detail: Details = new Details;
  isadduser: boolean |any;
  // added: any;
  // Adding: boolean = false;
  istaff: boolean = false;
  istudent: boolean = false;
  constructor(public data: DataService, public router: Router) {
    if (data.User.Usertype === "staff") {
      this.istaff = true;
    }
  }
  
  ngOnInit(): void {
  }
  // Adddetails(a:Details) {
  //   // for (let index = 0; index < this.Alldetails.length; index++) {
  //   //   if (this.Alldetails[index].Usertype.toLowercase() === Details) {
  //   //     this.added = this.Alldetails[index];
  //   //   }
  //   // }
  //   this.data.Alldetails.push(a);
  //   this.added = this.data.Alldetails.find((x) => x.Usertype.toLowerCase() ===Details)
  //   this.Adding = this.added ? true : false;
  //   return this.Adding;
    
  // }
  Add() {
    if (this.detail.Username !=null && this.detail.Password !=null && this.detail.Usertype !=null) {
      this.data.Adddetails(this.detail);
      this.detail = new Details;
      this.router.navigate(["/admin"]);
    
    } else {
      alert("Enter the Alldetails");
    }
  }
  
  }
