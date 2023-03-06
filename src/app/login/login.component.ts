import { Component } from '@angular/core';

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

// login(){
//   // alert("its working")
// var acnum=this.acno
// var psw=this.passwd
// var userDetails=this.userDetails

// if(acnum in userDetails){
//   if(psw==userDetails[acnum]["password"]){
//     alert("Login success")
//   }
//   else{
//     alert("Wrong Password")
//   }

// }
// else{
//   alert("Wrong Ac Number")
// }


// }
// acnoChange(event:any){
//  this.acno=event.target.value;
//  console.log(this.acno); 
// }
// pass(event:any){
//   this.passwd=event.target.value
//   console.log(this.passwd);
  
// }

// login(){
//   // alert("its working")
// var acnum=this.acno
// var psw=this.passwd
// var userDetails=this.userDetails

// if(acnum in userDetails){
//   if(psw==userDetails[acnum]["password"]){
//     alert("Login success")
//   }
//   else{
//     alert("Wrong Password")
//   }

// }
// else{
//   alert("Wrong Ac Number")
// }


// }

login(acnum:any,psw:any){
  var acnum=acnum.value
  var psw=psw.value
  var userDetails=this.userDetails

  if(acnum in userDetails){
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
        alert("Login success")
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
}



