import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pagination } from './Model/pagination';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseApiUrl = 'https://localhost:5001/api/'
  products: Product[] = [];
  pagination?: Pagination<Product[]>;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Pagination<Product>> {
    debugger;
    return this.http.get<Pagination<Product>>(this.baseApiUrl+'products').pipe(
      map(response=>{
        debugger;
        console.log(response);
        return this.pagination = response;
      })
    );
  }

  getProduct(id: number) : Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl+'products/'+id);
  }
}
