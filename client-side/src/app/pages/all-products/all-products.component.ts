import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor, NgIf,],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {

  isLoad = false;

  [x: string]: any;

  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    setTimeout(() => {
      this.isLoad = true;
    }, 1000)
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
