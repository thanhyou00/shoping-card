import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [
    {
      id : '1',
      name : 'iPhone X 64GB ',
      description : 'Description for product item number 1',
      thumbnail : '../../assets/images/iphone_x_64gb_3.jpg',
      price : 115.99,
      quantity : 2
    },
    {
      id : '2',
      name : 'Apple iPhone 13 256GB Pink',
      description : 'Description for product item number 2',
      thumbnail : '../../assets/images/Pink.png',
      price : 15.99,
      quantity : 2
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
