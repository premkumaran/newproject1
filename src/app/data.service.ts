import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Signin: boolean = false;
  User: any;
  Loggedin(Username: string |any, Password: string |any) {
    // for (let index = 0; index < this.Alldetails.length; index++) {
    //   if (this.Alldetails[index].Username.toLowerCase() === Username.toLowerCase() && this.Alldetails[index].Password === Password) {
    //     this.Signin = true;
    //     this.User = this.Alldetails[index];

    //   }
    //   break;
    // }
    this.User = this.Alldetails.find((x) => x.Username.toLowerCase() === Username.toLowerCase() && x.Password === Password)
    this.Signin = this.User ? true : false;
    return this.Signin;

  }
 
  // Addingdetails: Details[] = [];
  Alldetails: Details[] = [
    { id: "1", Username: "Admin", Password: "admin", Usertype: "admin" },
    { id: "2", Username: "staff", Password: "staff", Usertype: "staff" },
    { id: "3", Username: "student", Password: "student", Usertype: "student" },
  
    
  ];

  Logout() {
    this.Signin = false;
    this.router.navigate(["/login"]);
  }
  constructor(public router: Router) { }
  Adddetails(a:Details) {
    this.Alldetails.push(a);
 }
}
