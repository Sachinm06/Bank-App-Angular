import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //model for register form 
  registerForm = this.fb.group({
    acno: [' '],
    psw: [' '],
    uname: [' ']
  })


  register() {
    var acno = this.acno
    var psw = this.psw
    var uname = this.uname
    const result = this.ds.register(acno, uname, psw)
    if (result) {
      alert('registred')
      this.router.navigateByUrl("")
    }
    else {
      alert('user already present')
    }
  }

}

