import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestCategoryComponent } from './rest-category/rest-category.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AddRestCategoryComponent } from './add-rest-category/add-rest-category.component';
import { UserDetailsComponent } from './userdetails/userdetails.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BookingforuserComponent } from './bookingforuser/bookingforuser.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { RestforuserComponent } from './restforuser/restforuser.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
   { path: "login", component: LoginComponent },
   { path: "signup", component: SignUpComponent },
   { path: "forgotpassword", component: ForgotpasswordComponent },
  // { path: "forgotpassword", component:  }
 {path: 'admin', component: AdminHomeComponent,
children: [{ path: 'dashboard', component: DashboardComponent },
{ path: 'restcategory', component: RestCategoryComponent },
{ path: 'restaurant', component: RestaurantListComponent },
{ path: 'userdetails', component: UserDetailsComponent },
{path: 'addrestcategory', component: AddRestCategoryComponent},
{path: 'addrestaurant', component: AddRestaurantComponent},
{path: 'booking', component: BookinglistComponent}
]
 },
 {path: "user" , component: UserComponent,
 children: [{ path: 'profile', component: UserprofileComponent},
 { path: 'bookingdetails', component: BookingforuserComponent},
 { path: 'bookingpage', component: BookpageComponent},
 { path: 'restlist', component: RestforuserComponent}
]
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
