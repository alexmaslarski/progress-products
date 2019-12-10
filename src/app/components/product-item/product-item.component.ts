import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product: Product;


  constructor() { }

  ngOnInit() {
  }

  setClass(){
    let classes = {
      product: true,
      'out-of-stock': this.product.UnitsInStock==0
    }
    return classes;
  }
}
