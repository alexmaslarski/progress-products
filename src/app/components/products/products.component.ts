import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { products } from '../product-item/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor() { }

  ngOnInit() {
    this.products = products;
  }

}
