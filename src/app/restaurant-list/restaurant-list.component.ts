import { Component,OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
// imageDirectoryPath: any = "http://localhost:4200/"
restaurantList:any;
updrestaurant:any;
showform:boolean=false;
newRestaurant:any={};
searchname:any;

filterRest:any;
rest:any;
searchterm:string='';
constructor(private restser:RestaurantServiceService,private route:Router){

}
  ngOnInit(): void {
      this.getRestaurantList();
  }

  getRestaurantList(){
    return this.restser.getRestaurantList().subscribe((data:any)=>
    {
      console.log(data);
      this.restaurantList=data;
      this.filterRest=data;
    }
    )
  }

  delRestaurant(id:any){
    return this.restser.deleteRestaurant(id).subscribe((data:any)=>
    {
      console.log(data);
      this.ngOnInit();
    })
  }

  addRestaurant(){
    this.showform=true;
  }

  addnewRestaurant(){
    return this.restser.addRestaurant(this.newRestaurant).subscribe((data:any)=>
    {
      console.log(data);
      this.newRestaurant={};
      this.ngOnInit();
    })
  }
  updateRestaurant(){

    return this.restser.updateRestaurant(this.updrestaurant).subscribe((data:any)=>
    {
      console.log(data);
      this.updrestaurant=null;
      this.ngOnInit();
    })
  }

  editRestaurant(restaurant:any){
    this.updrestaurant=restaurant;
  }

  /*searchRestaurant(){
    
    return this.restser.SearchRestaurant(this.searchname).subscribe((data:any)=>
    {
    console.log(data);
    this.rest=data;
    this.restaurantList=[this.rest];
    //this.ngOnInit();
    }
    )
  }
    clearfunc(){
      this.ngOnInit();
  }*/


  
searchByRestName(){
  if(this.searchterm.trim()!==''){
    this.filterRest = this.restaurantList.filter((r:any)=>
    {
      return r.rname.toLowerCase().includes(this.searchterm.toLowerCase());
    });
  }
  else{
    this.filterRest=this.restaurantList;
  }
}
}