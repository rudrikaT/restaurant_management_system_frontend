import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rest-category',
  templateUrl: './add-rest-category.component.html',
  styleUrls: ['./add-rest-category.component.css']
})
export class AddRestCategoryComponent implements OnInit{
  category: any;
  showForm: boolean = false;
  newcategory: any = {};

  constructor(private admin: AdminServiceService, private router: Router) {}

  ngOnInit(): void {
    
  }
  
  addCategory() {
    this.showForm = true;
  }
  
  addNewCategory() {
    return this.admin.addRestCategory(this.newcategory).subscribe((data: any) => {
      console.log(data);
      this.newcategory = {};
      this.showForm = false; // Hide the form after adding a new category
      this.router.navigate(['/admin/restcategory']);
    });
  }
  cancelAddCategory() {
    this.newcategory = {}; // Reset the newcategory object
    this.showForm = false; // Hide the form
  }
  
}
