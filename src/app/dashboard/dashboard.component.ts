import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any
  result:any

  acno: any
  psw: any
  amt: any

  acno1: any
  psw1: any
  amt1: any
  constructor(private ds: DataService) {

    //access data from dataservice and store in a variable

    this.user = this.ds.currentUser

  }
  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amt = this.amt
    const result = this.ds.deposit(acno, psw, amt)
    if(result){
      alert(`your account has been credited with amount ${amt} and the available balance is ${result}`)
    }
    else{
      alert('Incorrect account number or password')
    }
  }

  withdrew(){
    var acno = this.acno1
    var psw = this.psw1
    var amt = this.amt1
    const result = this.ds.withdrew(acno, psw, amt)
    if(result){
      alert(`your account has been debited with amount ${amt} and the available balance is ${result}`)
    }
    else{
      alert('Incorrect account number or password')
    }
  }
  }
  


