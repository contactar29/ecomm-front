import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProductModelServer,ServerResponse } from '../modules/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http:HttpClient) {

  }

  /* Fetch all products from the backend */
  getAllProducts(numberOfResults = 10):Observable<ServerResponse>{
    return this.http.get<ServerResponse>(`${this.SERVER_URL}/products`, {
      params:{
        limit: numberOfResults.toString()
      }
    });
  }

  /* GET SINGLE PRODUCT FROM SERVER */
  getSingleProduct(id:number):Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(`${this.SERVER_URL}/products/${id}`);
  }

  /* GET PRODUCT FROM ONE CATEGORY */
  getProductsFromCategory(catName:string):Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(`${this.SERVER_URL}/products/category/${catName}`);
  }
}
