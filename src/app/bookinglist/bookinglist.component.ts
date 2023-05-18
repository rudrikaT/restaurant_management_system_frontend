import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit{

  bookinglist:any;


  constructor(private restser:RestaurantServiceService){

  }
  ngOnInit(): void {
      this.getBookingInfo();
  }

  getBookingInfo(){
    return this.restser.getBooking().subscribe((data:any)=>
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
}
