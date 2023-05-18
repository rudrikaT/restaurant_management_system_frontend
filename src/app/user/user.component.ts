import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  // redata:any;
  // loggedInUser:any;
  // uid:any;


  constructor(private router: Router) {
  //   const redata = localStorage.getItem('curuser');
  //   this.loggedInUser=JSON.parse(this.redata);
  // localStorage.setItem('curuser', JSON.stringify(this.loggedInUser));
   }

  ngOnInit() {
  }

  userHome(){
    this.router.navigate(['/user/restlist']);
  }
  
  
  bookingDetails()
  {
    this.router.navigate(['/user/bookingdetails']);
  }
  
 
  userDetails(){
    this.router.navigate(['/user/profile']);
  }
  
  
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  
  
  searchByLocation(){
    this.router.navigate(['/user/']);
  }
}
