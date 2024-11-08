import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(product: Product, imageFile?: File): Observable<Product> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('quantity', product.quantity.toString());
    formData.append('description', product.description);
    formData.append('category', product.category);
    // formData.append('colors', product.colors);

    if (imageFile) {
      formData.append('picture', imageFile); // Attach the file
    }

    return this.http.post<Product>(this.apiUrl, formData);
  }

  updateProduct(id: string| undefined, data: FormData): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data); // Ensure this endpoint handles FormData
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
