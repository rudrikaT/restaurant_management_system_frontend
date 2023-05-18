import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  isAdminLoggedIn: boolean;
  constructor(private httpclient: HttpClient) { 
    this.isAdminLoggedIn = false;
  }

  setIsAdminLoggedIn()
    {
      this.isAdminLoggedIn=true;
    }
    getIsAdminLoggedIn()
    {
      return this.isAdminLoggedIn;
    }

  getAllRestCategory(){
    return this.httpclient.get("restaurantcategory/list");
  }

  deleteRestCategory(id:any){
    return this.httpclient.delete("restaurantcategory/list/"+id);
  }

  updateRestCategory(category: any){
    return this.httpclient.put("restaurantcategory/list", category);
  }

  addRestCategory(category: any) {
    return this.httpclient.post("restaurantcategory/list", category);
  }
  
getRestCategoryById(categoryId:number){
  return this.httpclient.get("restaurantcategory/list/"+categoryId);
 } 

 getRestCategoryByName(categoryName:any){
  return this.httpclient.get("restaurantcategory/list3/"+categoryName);
 } 


}
