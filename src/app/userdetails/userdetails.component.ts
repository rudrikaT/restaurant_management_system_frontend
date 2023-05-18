import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent {
  users: any;
  newUser: any={};
  updUser: any=null;
  showForm: boolean = false;
  searchname:any;

  constructor(private service:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  addUser(){
    this.showForm=true;
  }
  
  createUser() {
      this.service.createUser(this.newUser)
        .subscribe(
          response => {
            console.log(response);
            this.getUsers();
            this.newUser = {};
          }
        );
  }

  editUser(user: any) {
    this.updUser = user;
  }

  updateUser(){
    return this.service.updateUser(this.updUser).subscribe((data:any)=>
    {
      console.log(data);
      this.updUser=null;
      this.ngOnInit();
    })
  }

  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(userId).subscribe((data) => {
        this.ngOnInit();
        console.log(data);
      });
    }
  }

  searchUser(){
    return this.service.searchUser(this.searchname).subscribe((data:any)=>
    {
      console.log(data);
      this.users=data;
    }
    )
  }

}
