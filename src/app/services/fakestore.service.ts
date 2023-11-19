import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';
const FAKE_STORE_API = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private http : HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc'): Observable<Array<Product>> {
      return this.http.get<Array<Product>>(
        `${FAKE_STORE_API}/products?sort=${sort}&limit=${limit}`
      )
  }

  getAllCategories(): Observable<Array<string>>{
    return this.http.get<Array<string>>(
      `${FAKE_STORE_API}/products/categories`
    )
  }
}
