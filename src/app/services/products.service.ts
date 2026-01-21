import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Products } from '../classes/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'https://localhost:7087/api/Product';

  // חיפוש משותף ל-Header ול-Products
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  setSearch(searchText: string): void {
    this.searchSubject.next(searchText);
  }

  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.URL);
  }

  getProductsByName(productName: string): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.URL}/byname/${productName}`);
  }
}
