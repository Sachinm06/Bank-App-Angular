import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno: any
  uname: any
  psw: any

  d1="Enter account number"
  d2="enter password"

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //model for register form 
  registerForm1 = this.fb.group({
    acno: [' ',[Validators.required,Validators.pattern('[0-9]+')]],
    psw: [' ',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
  })


  register() {
    var acno = this.registerForm1.value.acno
    var psw = this.registerForm1.value.psw
    var uname = this.registerForm1.value.uname
    if(this.registerForm1.valid){
      const result = this.ds.register(acno, uname, psw)
      if (result) {
        alert('registred')
        this.router.navigateByUrl("")
      }
      else {
        alert('user already present')
      }
    }
    else{
      alert('Invalid Form')
    }
  
  }

}

