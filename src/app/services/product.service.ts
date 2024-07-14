import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : ProductModel[];
  product! : ProductModel;
  categories : CategoryModel[];
  category! : CategoryModel;

  constructor(){
  this.categories =  [{categoryId: 1 , categoryName: "Bakery"},
    {categoryId: 2 , categoryName: "Dairy"},
    {categoryId: 3 , categoryName: "Meat"},
    {categoryId: 4 , categoryName: "Frozen food"},
    {categoryId: 5 , categoryName: "Sea food"},
  ]
    this.products= [
      {productId: 1 , productName : "Cheese",productPrice: 55.00,dateCreation:new Date(),category:   {categoryId: 2 , categoryName: "Dairy"}},
      {productId: 2 , productName : "Milk",productPrice: 554.00,dateCreation:new Date(),category:   {categoryId: 2 , categoryName: "Dairy"}},
      {productId: 3 , productName : "Bread",productPrice: 2.00,dateCreation:new Date(),category: {categoryId: 1 , categoryName: "Bakery"}},
      {productId: 4 , productName : "l7am",productPrice: 12.00,dateCreation:new Date(),category: {categoryId: 3 , categoryName: "Meat"} },

    ];
  }

  productList(){
    return this.products; 
  }
  addProduct(newProduct : ProductModel){
    this.products.push(newProduct);
  }
  deleteProduct(product : ProductModel){
    const index = this.products.indexOf(product,0);
    this.products.splice(index,1);
  }
  editProduct(id : number){
    this.product =  this.products.find( p => p.productId == id)!;
    return this.product;
  }
  updateProduct(product : ProductModel){
    this.deleteProduct(product);
    this.addProduct(product);
    this.sortProduct();
  }

  sortProduct(){
    this.products.sort(
      (x,y)=>(x.productId! > y.productId! ? 1 : -1)
    );
  }
  
  CategoriesList(){
    return this.categories; 
  }
  editCategory(id : number){
    this.category =  this.categories.find( c => c.categoryId == id)!;
    return this.category;
  }

}
