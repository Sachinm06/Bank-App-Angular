import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your Perfect Banking Partner"
  data1="Enter your account number"
  data2="Enter your password"
  acno:any
  passwd:any

  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"arun",acno:1001,password:"abc123",balance:0},
    1002:{username:"amal",acno:1002,password:"abc123",balance:0},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0},

  }
constructor(private router:Router){ }


login(){
var acnum=this.acno
var psw=this.passwd
var userDetails=this.userDetails

if(acnum in userDetails){
  if(psw==userDetails[acnum]["password"]){
    // alert("Login success")
    this.router.navigateByUrl("dashboard")
  }
  else{
    alert("Wrong Password")
  }

}
else{
  alert("Wrong Ac Number")
}


}
}



