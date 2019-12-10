import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/Product';
import { products } from './products';
import { RowClassArgs } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor() { }

  ngOnInit() {
    this.products = products;
  }
  public rowCallback(context: RowClassArgs) {
    const inStock = context.dataItem.UnitsInStock >0;
    return {
        product: inStock,
        'out-of-stock': !inStock
    };
}
  public gridData: any[] = products;
}
