import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestCategoryComponent } from './rest-category/rest-category.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddRestCategoryComponent } from './add-rest-category/add-rest-category.component';
import { UserDetailsComponent } from './userdetails/userdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UserComponent } from './user/user.component';
import { BookingforuserComponent } from './bookingforuser/bookingforuser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { RestforuserComponent } from './restforuser/restforuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestCategoryComponent,
    SignUpComponent,
    RestaurantListComponent,
    LoginComponent,
    AdminHomeComponent,
    DashboardComponent,
    AddRestaurantComponent,
    AddRestCategoryComponent,
    UserDetailsComponent,
    ForgotpasswordComponent,
    BookinglistComponent,
    UserComponent,
    BookingforuserComponent,
    UserprofileComponent,
    BookpageComponent,
    RestforuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
