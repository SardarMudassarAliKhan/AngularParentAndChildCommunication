import { Component } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  products: Product[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    debugger;
    this.shopService.getProducts().subscribe({
      next: (response) => {
        debugger;
        console.log(response);
        this.products = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



}
