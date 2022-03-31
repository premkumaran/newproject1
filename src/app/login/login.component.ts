import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username = "";
  Password = "";
 
  constructor(public data: DataService, public router: Router,private notifyService:NotificationService) { }
  showToasterError(){
    this.notifyService.showError("Something is wrong", "tutsmake.com")
}
  ngOnInit(): void {
  }
 
  login() {
    const data = this.data.Loggedin(this.Username, this.Password);
    //       this.User = this.data.Alldetails.find((x) => x.Username.toLowerCase() === this.Username.toLowerCase() && x.Password === this.Password)
    // if (this.User && this.User.Usertype === "admin") {
    //   this.router.navigate(["/admin"]);
    // }
    if (data) {

      if (this.data.User.Usertype === "admin") {
        this.router.navigate(["/admin"]);
      }
      if (this.data.User.Usertype === "staff") {
        this.router.navigate(["/admin"]);
      }
      if (this.data.User.Usertype === "student") {
        this.router.navigate(["/admin"]);
      }
    }
  }

}
