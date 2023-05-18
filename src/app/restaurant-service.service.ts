import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  loggedUser:any
  userretr:any;
  restretr:any;
  bookedRest:any;
  constructor(private client:HttpClient) { }

  updateUser(user:any){
    return this.client.put("/user/list",user);
  }


  getRestaurantList(){
    return this.client.get("/restaurant/list");
  }

  deleteRestaurant(id:any){
    return this.client.delete("/restaurant/list/"+id);
  }

  updateRestaurant(rest:any){
    return this.client.put("/restaurant/list",rest);
  }

  addRestaurant(rest:any){
    return this.client.post("/restaurant/list",rest);
  }

  SearchRestaurant(name:any){
    return this.client.get("/restaurant/list1/"+name);
  }


  CheckUser(email:any){
    return this.client.get("/user/list2/"+email);
  }

  AddUser(user:any){
    return this.client.post("/user/list",user);
  }

  // getBooking(){
  //   return this.client.get("/booking/list");
  // }

  deleteBooking(id:any){
    return this.client.delete("/booking/list/"+id);
  }

  getBooking(){
    return this.client.get("/booking/list");
  }

  // delBooking(id:any){
  //   return this.client.delete("booking/list/"+id);
  // }

  updBooking(book:any){
    return this.client.put("/booking/list",book);
  }

  getUserBookings(uid:any){
    return this.client.get("/booking/list2/"+uid);
  }

  addBooking(book:any){
    return this.client.post("/booking/list",book);
  }


  getUserByid(uid:any){
    return this.client.get("/user/list/"+uid);
  }

  getUserauth(uemail:any,upass:any){
    return this.client.get("/user/list4/"+uemail+"/"+upass);
  }

  getYourCity(){
    return this.client.get("https://ipapi.co/json");
  }

  setUser(){
    this.userretr=localStorage.getItem('curuser');
    this.loggedUser=JSON.parse(this.userretr);
    localStorage.clear();
  }
  
  setRestaurant(){
    this.restretr=localStorage.getItem('currest');
    this.bookedRest=JSON.parse(this.restretr);
    localStorage.clear();
  }

  getAllRestCategory(){
    return this.client.get("restaurantcategory/list");
  }

  deleteRestCategory(id:any){
    return this.client.delete("restaurantcategory/list/"+id);
  }

  updateRestCategory(category: any){
    return this.client.put("restaurantcategory/list", category);
  }

  addRestCategory(category: any) {
    return this.client.post("restaurantcategory/list", category);
  }
  
getRestCategoryById(categoryId:number){
  return this.client.get("restaurantcategory/list/"+categoryId);
 } 

 getRestCategoryByName(categoryName:any){
  return this.client.get("restaurantcategory/list3/"+categoryName);
 } 

 getRestById(rid:any){
  return this.client.get("restaurant/list/"+rid);
 } 

 getRestBasedOnrating(sort:any){
  return this.client.get("restaurant/slist/"+sort);
 }

}
