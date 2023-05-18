import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  User: any;
  chuser: any;

  constructor(
    private toastr: ToastrService,
    private restser: RestaurantServiceService,
    private adminser: AdminServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // this.loginDetails();
  }

  /*loginDetails() {
    if (this.email == 'admin@gmail.com' && this.password == '1$Password') {
      this.adminser.setIsAdminLoggedIn(); //true
      this.toastr.success('Logged In Successfully');
      this.route.navigateByUrl('admin');
    } else {
      this.restser.CheckUser(this.email).subscribe((data: any) => {
        console.log(data);
        if (data == null) {
          this.toastr.error('User does not exist');
          return;
        }

        this.User = data;

        if (this.email == this.User.uemail && this.password == this.User.upassword) {
          this.toastr.success('Login Successful');
          localStorage.setItem('curuser', JSON.stringify(this.User));
          this.route.navigateByUrl('user');
        } else {
          this.toastr.error('Incorrect credentials');
          this.route.navigateByUrl('');
        }
    
      })
    }
    }
    ForgotPassword() {
      this.route.navigateByUrl('forgotpassword');
    }
  }
  */

  ForgotPassword(){
    this.route.navigateByUrl("forgotpassword");
  }

  // userexits(){
  //   return this.restser.CheckUser(this.email).subscribe((data:any)=>{
  //     this.chuser=data;
  //     this.loginDetails();
  //   })
  // }

//   loginDetails(){
//    // this.userexits();
//     console.log(this.chuser);
//     return this.restser.getUserauth(this.email,this.password).subscribe((data:any)=>
//     {
//       console.log(data);
//       if(this.chuser==null){
//         alert("User does not exist");
//       }
//       else if(data==null){
//         alert("Incorrect Credentials");
//         console.log(data);
//       }
//       else{
//         this.User=data;
//         alert("Login Successful");
//         localStorage.setItem('curuser',JSON.stringify(this.User));
//         this.restser.setUser();
//         this.route.navigateByUrl("restforuser");
//       }
//     })
//   }
// }

userexits(){
  if (this.email == 'admin@gmail.com' && this.password == '1$Password') {
    this.adminser.setIsAdminLoggedIn(); //true
    this.toastr.success('Logged In Successfully');
    this.route.navigateByUrl('admin');}
    else{
   this.restser.CheckUser(this.email).subscribe((data:any)=>{
    this.chuser=data;
    this.loginDetails();
  })
}
}

loginDetails(){
 // this.userexits();
  console.log(this.chuser);
  return this.restser.getUserauth(this.email,this.password).subscribe((data:any)=>
  {
    console.log(data);
    if(this.chuser==null){
      this.toastr.error('User does not exist');
    }
    else if(data==null){
      this.toastr.error('Incorrect credentials');
      console.log(data);
    }
    else{
      this.User=data;
      this.toastr.success('Login Successful');
      localStorage.setItem('curuser',JSON.stringify(this.User));
      this.restser.setUser();
      this.route.navigateByUrl('user');
    }
  })
}
}