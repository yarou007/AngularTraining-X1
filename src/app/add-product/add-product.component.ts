import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CategoryModel } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct = new ProductModel();
  categories :  CategoryModel[];
  newCategory! : CategoryModel; 
  newCategoryId! : number;


  constructor(private productService : ProductService, private route : Router){
    this.categories = this.productService.CategoriesList();
  }

  addProduct(){
    this.newCategory =  this.productService.editCategory(this.newCategoryId);
    this.newProduct.category = this.newCategory;
    this.productService.addProduct(this.newProduct);
    this.route.navigate(['/products-list']);
  }

  
}
