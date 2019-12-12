import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { productsData } from './products'; // import data
import { RowClassArgs } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  public rowCallback(context: RowClassArgs) { 
    const inStock:boolean = context.dataItem.UnitsInStock >0; // create a boolean that stores whether the current dataItem has units in stock or not
    return {
        'out-of-stock': !inStock // return out-of-stock classname if inStock is false
    };
}
  public gridData: any[] = productsData; //declare and initialize gridData with ProductData
}
