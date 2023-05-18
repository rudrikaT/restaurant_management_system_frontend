import { Component,OnInit} from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit{

  user:any;
  retrieverest:any;
  restaurant:any;
  booking:any={};
  constructor(private restser:RestaurantServiceService,private route:Router){
  //this.retrieverest=localStorage.getItem('currest');
   //this.restaurant=JSON.parse(this.retrieverest);
   this.restaurant=this.restser.bookedRest;
   console.log(this.restaurant);
   this.user=this.restser.loggedUser;
  }

ngOnInit(): void {
    
}
  

  BookRestaurant(){
    this.booking.rid=this.restaurant.rid;
    this.booking.uid=this.user.uid
    console.log(this.booking);
    return this.restser.addBooking(this.booking).subscribe((data)=>
    {
      console.log(data);
      this.route.navigate(['/user/bookingdetails']);
    })
  }
cancel(){
  this.route.navigate(['/user/restlist']);
}

}
