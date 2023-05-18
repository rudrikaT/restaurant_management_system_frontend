import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/user/list';

  constructor(private client:HttpClient) { }

  getUsers() {
    return this.client.get(`${this.baseUrl}`);
  }

  getUser(id: number) {
    return this.client.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: any) {
    return this.client.post(`${this.baseUrl}`, user);
  }

  updateUser(user: any) {
    return this.client.put(`${this.baseUrl}`, user);
  }

  deleteUser(id: number) {
    return this.client.delete(`${this.baseUrl}/${id}`);
  }

  // searchUser(name:any){
  //   return this.client.get(`${this.baseUrl}1/${name}`);
  // }
  searchUser(name:any){
    return this.client.get(`${this.baseUrl}/search/${name}`);
  }
}
