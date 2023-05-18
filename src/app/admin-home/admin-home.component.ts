import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }

//navigate to dashboard
home(){
  this.router.navigate(['/admin/dashboard']);
}

//navigate to orders
getRestaurant()
{
  this.router.navigate(['/admin/restaurant']);
}

//navigate to add item page
getCategories(){
  this.router.navigate(['/admin/restcategory']);
}

//navigate to add catgeory page
getBookings(){
  this.router.navigate(['/admin/booking']);
}

//navigate to add sub-catgeory page
getUsers(){
  this.router.navigate(['/admin/userdetails']);
}


//navigate to sub-categories
addRestaurant(){
  this.router.navigate(['/admin/addrestaurant']);
}

//navigate to get-items
addCategory()
{
  this.router.navigate(['/admin/addrestcategory']);
}



//logout
logout(){
  localStorage.clear();

  // Redirect the user to the login page
  this.router.navigate(['']);
}
}

