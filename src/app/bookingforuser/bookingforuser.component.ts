import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-bookingforuser',
  templateUrl: './bookingforuser.component.html',
  styleUrls: ['./bookingforuser.component.css']
})
export class BookingforuserComponent implements OnInit{

  bookinglist:any;
  selectedbooking:any;
  uid:any;
  updbooking:boolean=false;
  ratingform:boolean=false;
  ratebooking:any;
  loggeduser:any;

  constructor(private restser:RestaurantServiceService){
    this.loggeduser=this.restser.loggedUser;
    this.uid=this.loggeduser.uid;
    // this.uid=1;
  }
  ngOnInit(): void {
      this.getBookingInfo();
  }

  getBookingInfo(){
    return this.restser.getUserBookings(this.uid).subscribe((data:any)=>
    {
      console.log(data);
      this.bookinglist=data;
    })
  }


  deleteBooking(bid:any){
      return this.restser.deleteBooking(bid).subscribe((data:any)=>
      {
        console.log(data);
        this.ngOnInit();
      })
  }

  editBooking(booking:any){
    this.selectedbooking=booking;
    this.updbooking=true;
    
  }
  cancel(){
    this.updbooking=false;
    this.ratingform=false;
  }
  updateBooking(){
    return this.restser.updBooking(this.selectedbooking).subscribe((data:any)=>
    {
      console.log(data);
      this.selectedbooking=null;
      this.updbooking=false;
      this.ngOnInit();
      
    })
  }

  ratingch(booking:any){
    this.ratebooking=booking;
    this.ratingform=true;
    
  }
  rating(){
    return this.restser.updBooking(this.ratebooking).subscribe((data:any)=>
    {
      console.log(data);
      //this.ratebooking=null;
      this.ratingform=false;
      this.ngOnInit();
      
    })
  }
}
