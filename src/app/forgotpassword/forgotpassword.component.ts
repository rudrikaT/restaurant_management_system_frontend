import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{

email:any;
secAns:any;
userval:any={};
showform:boolean=false;
passchangeform:boolean=false;
newpassword:any;
  constructor(private restser:RestaurantServiceService,private route:Router){

  }
  ngOnInit(): void {
      
  }

  finduser(){
    return this.restser.CheckUser(this.email).subscribe((data:any)=>
    {
      if(data==null){
        alert('User does not exist');
      }
      else{
        this.userval=data;
        this.userval.securityquestion=data.securityQuestion;
        this.showform=true;
        
        alert("User exists");
      }
    })
  }

  checkans(){

    if(this.secAns==this.userval.securityAnswer){
      console.log("enterd if");
      this.passchangeform=true;
      
    }
    else{
      alert("Wrong Answer!");
    }
  }
  changepassword(){
    
    this.userval.upassword=this.newpassword;
    console.log(this.userval.upassword);
    console.log(this.userval);
    return this.restser.updateUser(this.userval).subscribe((data:any)=>
    {
      console.log(data);
      alert("Password changed Successfully");

      this.route.navigateByUrl("login");
    })
  }
}
