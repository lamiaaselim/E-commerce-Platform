import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';
import { SocketService } from '../../../../services/socket.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ NgIf, EditProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  [x: string]: any;

  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private productService: ProductService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    // Listen for real-time updates
    this.socketService
      .listen<Product>('productCreated')
      .subscribe((product) => {
        this.products.push(product);
      });

    this.socketService
      .listen<Product>('productUpdated')
      .subscribe((updatedProduct: Product) => {
        const index = this.products.findIndex(
          (p) => p._id === updatedProduct._id
        );
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
      });

    this.socketService
      .listen<string>('productDeleted')
      .subscribe((id: string) => {
        this.products = this.products.filter((p) => p._id !== id);
      });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

  addProduct(product: Product): void {
    this.productService.createProduct(product).subscribe();
  }

  updateProduct(product: Product): void {
    this.selectedProduct = product; // Set the product to be edited
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe();
  }

  closeEdit(): void {
    this.selectedProduct = null; // Close the edit form
  }

  trackByProductId(index: number, product: Product): string {
    return product._id!;
  }
}
