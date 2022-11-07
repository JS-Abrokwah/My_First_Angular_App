import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';
/*
Why all those imports.

Component is needed to model our component, by specifying the how we select the component elswhere (selector), the view html template and the styles.

EventEmitter is needed to handle user intearactive events in the view/DOM depending by using the $event object
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '../assets/images/snikker.png',
        ['Men', 'Foot ware', 'Running Shoes'],
        110.44
      ),
      new Product(
        'WINTERJACKET',
        'Woolen Winter Jacket',
        '../assets/images/jacket.png',
        ['Men', 'Clothing', 'Winter Jacket'],
        121.76
      ),
      new Product(
        'SUNHAT',
        'A Nice Black Cap',
        '../assets/images/cap.png',
        ['Men', 'Accessories', 'Caps & Hats'],
        110.44
      ),
    ];
  }

  //A function that executes when user click on a product
  productWasSelected(product: Product): void {
    console.log('Product clicked', product);
  }
}
