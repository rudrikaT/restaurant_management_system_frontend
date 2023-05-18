import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  user:any;
  exits:any;
  retuser:any;

  address:any;
  formData: any = {};

  constructor(private restser:RestaurantServiceService,private rote:Router){
    this.user={"uid":"","uname":"","uaddress":"","uemail":"","upassword":"","securityQuestion":"","securityAnswer":""}
  }
  
  getUserCity(){
    return this.restser.getYourCity().subscribe((info:any)=>{
      console.log(info);
      this.address = info.city;
      
    })
  }
 
  
  signUpDetails(signUpForm:any){

    
    this.user.uname = signUpForm.name;
    this.user.uaddress = signUpForm.addr;
    this.user.uemail = signUpForm.email;
    this.user.upassword = signUpForm.pass;
    this.user.securityQuestion = signUpForm.question;
    this.user.securityAnswer = signUpForm.ans;
    console.log(this.user);
    this.userexits();
  
  }
  
  userexits(){
    return this.restser.CheckUser(this.user.uemail).subscribe((data:any)=>
    {
      console.log(data);
      if(data==null){
        this.restser.AddUser(this.user).subscribe((info:any)=>
      {
        console.log(info);  
        this.user={"uid":"","uname":"","uaddress":"","uemail":"","upass":"","securityQuestion":"","securityAnswer":""}
        alert("Account created");
        this.rote.navigateByUrl("login");
      }
      )
      }
      else{
        alert("Account Already Exits");
  
      }
    })
  }
    ngOnInit(): void {
    }
}