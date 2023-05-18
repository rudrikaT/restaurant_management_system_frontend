import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rest-category',
  templateUrl: './rest-category.component.html',
  styleUrls: ['./rest-category.component.css']
})
export class RestCategoryComponent implements OnInit {
  category: any;
  showForm: boolean = false;
  newcategory: any = {};
  selectedCategory: any;
  editingCategory: boolean = false;
  searchTerm: string = '';
  
  filteredCategories: any;

  constructor(private admin: AdminServiceService) {}

ngOnInit(): void {
  this.getCategoryInfo();
}

getCategoryInfo() {
  return this.admin.getAllRestCategory().subscribe((data: any) => {
    this.category = data;
    this.filteredCategories = data;
  });
}

delCategory(id: any) {
  return this.admin.deleteRestCategory(id).subscribe((data: any) => {
    console.log(data);
    this.ngOnInit();
  });
}

addCategory() {
  this.showForm = true;
}

addNewCategory() {
  return this.admin.addRestCategory(this.newcategory).subscribe((data: any) => {
    console.log(data);
    this.newcategory = {};
    this.showForm = false; // Hide the form after adding a new category
    this.ngOnInit();
  });
}

cancelAddCategory() {
  this.newcategory = {}; // Reset the newcategory object
  this.showForm = false; // Hide the form
}

editCategory(category: any) {
  this.selectedCategory = { ...category };
  this.editingCategory = true; // Set editingCategory to true to open the edit form
}
updateCategory() {
  return this.admin.updateRestCategory(this.selectedCategory).subscribe((data: any) => {
    console.log(data);
    this.selectedCategory = null;
    this.editingCategory = false; // Close the form
    this.ngOnInit();
  });
}
cancelUpdateCategory() {
  this.selectedCategory = null;
  this.editingCategory = false;
}

// searchByCategoryName() {
//   return this.admin.getRestCategoryByName(this.searchTerm).subscribe((data: any) => {
//     this.category = data;
//   });
// }

searchByCategoryName() {
  if (this.searchTerm.trim() !== '') {
    this.filteredCategories = this.category.filter((c: any) => {
      return c.rcname.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  } else {
    this.filteredCategories = this.category;
  }
}
}