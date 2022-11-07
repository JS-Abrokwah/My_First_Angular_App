import { Component, OnInit,Input,HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product!:Product;
  @HostBinding('attr.class') css='row col border border-3 rounded-3 ms-3 me-3 mb-3 mt-3'

  constructor() { }

  ngOnInit(): void {
  }

}
