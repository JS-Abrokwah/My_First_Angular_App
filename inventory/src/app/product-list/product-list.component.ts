import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Product } from '../product.model';

/*
Why those import?
Input: used to take inputs from other components. It tell angular that, a property of this component takes it's value as an input from another component

Output: Used to trow outputs from this component to another component
*/

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productsList!:Product[];

  @Output() onProductSelected:EventEmitter<Product>;

  private currentProduct!:Product;

  constructor() {
    this.onProductSelected=new EventEmitter();
   }


  clicked(product:Product):void{
    this.currentProduct=product;
    this.onProductSelected.emit(product)
  }

  isSelected(product:Product):boolean{
    if(!product||!this.currentProduct){
      return false
    }
    return product.sku===this.currentProduct.sku;
  }

}
