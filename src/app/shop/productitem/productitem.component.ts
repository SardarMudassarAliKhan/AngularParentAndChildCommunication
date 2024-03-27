import { Component, Input } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent {
   @Input() product?: Product;
  constructor() { }

}
