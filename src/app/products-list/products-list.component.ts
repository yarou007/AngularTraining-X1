import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products : ProductModel[];

  constructor(){
    this.products= [
      {productId: 1 , productName : "Cheese",productPrice: 55.00,dateCreation:new Date()},
      {productId: 2 , productName : "Milk",productPrice: 554.00,dateCreation:new Date()},
      {productId: 3 , productName : "Bread",productPrice: 2.00,dateCreation:new Date()},
      {productId: 4 , productName : "l7am",productPrice: 12.00,dateCreation:new Date()},

    ];
  }
}
