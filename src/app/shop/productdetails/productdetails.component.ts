import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  product?: Product;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      debugger;
      this.loadprduct();
    }

    loadprduct()
    {
      debugger;
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        debugger;
        this.shopService.getProduct(+id).subscribe({
          next: (response) => {
            debugger;
            this.product = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }

}
