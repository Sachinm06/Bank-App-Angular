import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any
  userDetails:any

  // userDetails: any = {
  //   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transaction: [] },
  //   1001: { username: "arun", acno: 1001, password: "abc123", balance: 0, transaction: [] },
  //   1002: { username: "amal", acno: 1002, password: "abc123", balance: 0, transaction: [] },
  //   1003: { username: "mega", acno: 1003, password: "abc123", balance: 0, transaction: [] },
  // }

  constructor(private http:HttpClient) {
    // this.getDetails()
   }


  // saveDetails() {
  //   if (this.userDetails) {
  //     localStorage.setItem("userDetails", JSON.stringify(this.userDetails))
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", this.currentUser)
  //   }
  //   if (this.currentAcno) {
  //     localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
  //   }
  // }

  // getDetails() {
  //   if (localStorage.getItem("userDetails")) {
  //     this.userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
  //   }
  //   if (localStorage.getItem("currentUser")) {
  //     this.currentUser = localStorage.getItem("currentUser")
  //   }
  //   if (localStorage.getItem("currentAcno")) {
  //     this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || "")
  //   }
  // }



  register(acno: any, uname: any, psw: any) {
  const data={acno,uname,psw}
  return this.http.post('http://localhost:3000/register',data)
  }

  login(acno: any, psw: any) {
  const data={acno,psw}
  return this.http.post('http://localhost:3000/login',data)
  }


  deposit(acno: any, psw: any, amt: any) {
    // //to convert string amount to int
    // var amount = parseInt(amt)
    // var userDetails = this.userDetails

    // if (acno in userDetails) {
    //   if (psw == userDetails[acno]["password"]) {
    //     userDetails[acno]["balance"] += amount

    //     //add transaction data
    //     userDetails[acno]["transaction"].push(
    //       {
    //         type: "credit",
    //         amount: amount
    //       }
    //     )
    //     this.saveDetails()

    //     return userDetails[acno]["balance"]

    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }
  }




  withdrew(acno: any, psw: any, amt: any) {
    // //to convert string amount to int
    // var amount = parseInt(amt)
    // var userDetails = this.userDetails

    // if (acno in userDetails) {
    //   if (psw == userDetails[acno]["password"]) {
    //     if (amount <= userDetails[acno]["balance"]) {
    //       userDetails[acno]["balance"] -= amount

    //       //add transaction data
    //       userDetails[acno]["transaction"].push(
    //         {
    //           type: "debit",
    //           amount: amount
    //         }
    //       )
    //       console.log(userDetails);

    //       this.saveDetails()

    //       return userDetails[acno]["balance"]

    //     }
    //     else {
    //       alert('insufficient balance')
    //     }

    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }
  }

  getTransaction(acno: any) {
    // return this.userDetails[acno].transaction
  }

}

