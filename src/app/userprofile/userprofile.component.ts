import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

//   redata:any;
//   loggedInUser:any;
//   uid:any;
// constructor(private restser:RestaurantServiceService,private route:Router, private toast:ToastrService){
//   this.redata=localStorage.getItem('curuser');
//   this.loggedInUser=JSON.parse(this.redata);
// }

//   ngOnInit(): void {
//   }

//   updateUser(){
//     return this.restser.updateUser(this.loggedInUser).subscribe((data)=>
//     {
//       console.log(data);
//       this.toast.success("Updated Successfully");
//     })
//   }


//   homePage(){
//     this.route.navigateByUrl("restforuser");
//   }

//   viewBookings(){
//     this.route.navigateByUrl("bookingforuser");
//   };

//   cancel(){
//     this.ngOnInit();
//   }
// }



redata:any;
  loggedInUser:any;
  uid:any;
  User:any;
constructor(private restser:RestaurantServiceService,private route:Router, private toast:ToastrService){
  // this.redata=localStorage.getItem('curuser');
  this.loggedInUser=restser.loggedUser;
  //this.loggedInUser=JSON.parse(this.redata);
}

  ngOnInit(): void {
  }

  updateUser(){
    return this.restser.updateUser(this.loggedInUser).subscribe((data)=>
    {
      console.log(data);
      this.User=this.loggedInUser;
      localStorage.removeItem('curuser');
      localStorage.setItem('curuser',JSON.stringify(this.User));
      this.restser.setUser();
      this.toast.success("Updated Successfully");
    })
  }
}