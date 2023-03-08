import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:any
  uname:any
  psw:any

  constructor(private ds: DataService){}

  register(){
  var acno = this.acno
  var psw = this.psw
  var uname = this.uname
  const result =this.ds.register(acno,uname,psw)
  if(result){
    alert('registred')
  }
  else{
    alert('user already present')
  }
  }

}

