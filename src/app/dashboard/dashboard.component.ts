import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

user:any
constructor(private ds:DataService){

  //access data from dataservice and store in a variable

this.user=this.ds.currentUser

}

}
