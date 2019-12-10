import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/Product'; // import product model
import { products } from './products'; // import file containing product objects
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {
@Input() product: Product;


  constructor() { }

  ngOnInit() {
    console.log(this.gridData[0]);
    
  }
  public rowCallback(context: RowClassArgs) {
    console.log(context.dataItem.Discontinued);
    
    const inStock = context.dataItem.UnitsInStock >0;
    return {
        product: inStock,
        'out-of-stock': !inStock
    };
}
  public gridData: any[] = products;
  
}
