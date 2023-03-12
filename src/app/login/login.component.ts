import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data1="Enter your account number"
  data2="Enter your password"
  acno:any
  passwd:any

constructor(private router:Router,private ds:DataService){ }



login(){
  var acnum=this.acno
  var psw=this.passwd
  const result=this.ds.login(acnum,psw)
  
  if(result){
    alert("login success")
    this.router.navigateByUrl("dashboard")
  }
  else{
    alert("incorrect acc no or password")
  }
}


}

// ---------------------------------------


