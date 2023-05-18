import { Component } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  showform:boolean=false;
  newRestaurant:any={};
  restaurantList:any;

  constructor(private restser:RestaurantServiceService,private router:Router){

  }
    ngOnInit(): void {
       
    }

  addRestaurant(){
    this.showform=true;
  }

  addnewRestaurant(){
    return this.restser.addRestaurant(this.newRestaurant).subscribe((data:any)=>
    {
      console.log(data);
      this.newRestaurant={};
      this.router.navigate(['/admin/restaurant']);
      this.ngOnInit();
    })
  }
}
