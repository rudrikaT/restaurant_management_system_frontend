import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restforuser',
  templateUrl: './restforuser.component.html',
  styleUrls: ['./restforuser.component.css']
})
export class RestforuserComponent implements OnInit{
/*
restaurantList:any;

constructor( private restser:RestaurantServiceService){

}
  ngOnInit(): void {
      this.getRestaurantInfo();
  }


  getRestaurantInfo(){
    this.restser.getRestaurantList().subscribe((data:any)=>
    {
      console.log(data);
      this.restaurantList=data;
    })
  }*/
  retrieverest:any;
  retrieveuser:any;
  restaurantnewbut:any;


  restaurantList:any;
  categories : any;
  selectedCategory: any;
  filteredRestaurants: any;
  selectedRest:any;
  searchterm: any;
  filterRest: any;
  sort:any;
  constructor( private restser:RestaurantServiceService,private route:Router ){

  }
  ngOnInit(): void {
      this.getRestaurants();
      this.getCategories();
  }

  getRestaurants(){
    this.restser.getRestaurantList().subscribe((data:any)=>
    {
      console.log(data);
      this.restaurantList=data;
      this.filteredRestaurants=data;
    })
  }

  getCategories() {
    this.restser.getAllRestCategory().subscribe((data:any)=>{
      console.log(data);
      this.categories = data;
    })
  }

  filterRestaurants() {
    if (this.selectedCategory) {
      this.filteredRestaurants = this.restaurantList.filter((restaurant: any) => restaurant.rcid == this.selectedCategory);
    } else {
      this.filteredRestaurants = this.restaurantList;
    }
    console.log(this.selectedCategory, this.restaurantList.filter((r: any)=> r.rcid))
  }

  booknow(rid:any){
    this.getRestaurantById(rid);
    localStorage.setItem('currest',JSON.stringify(this.selectedRest));
      this.restser.setRestaurant();
      this.route.navigate(['/user/bookingpage']);
  }


  getRestaurantById(rid:any){
    return this.restser.getRestById(rid).subscribe((data:any)=>
    {
      console.log(data);
      this.selectedRest=data;
    })
  }


  searchByRestName(){
    if(this.searchterm.trim()!==''){
      this.filteredRestaurants = this.restaurantList.filter((r:any)=>
      {
        return r.rname.toLowerCase().includes(this.searchterm.toLowerCase());
      });
    }
    else{
      this.filteredRestaurants=this.restaurantList;
    }
  }

  sortRestaurant(){

    if(this.sort=="default")
      this.filteredRestaurants = this.restaurantList;
    this.restser.getRestBasedOnrating(this.sort)
      .subscribe((data:any)=>{
        this.filteredRestaurants= data;
      });
    
  }

  getCategoryOf(rcid: any){

    return this.categories.find((c:any)=>c.rcid == rcid).rcname
  }
}
