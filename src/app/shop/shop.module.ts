import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductitemComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ShopComponent,
    RouterModule,
  ]
})
export class ShopModule { }
