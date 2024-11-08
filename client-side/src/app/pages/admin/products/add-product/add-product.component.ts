import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product: Product = { name: '', price: 0, quantity: 0 , description: '' , category: ''};
  selectedFile?: File;

  constructor(private productService: ProductService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addProduct(): void {
    if (this.product.name && this.product.price && this.product.quantity && this.product.description && this.product.category) {
      this.productService.createProduct(this.product, this.selectedFile).subscribe(() => {
        console.log('Product added successfully');
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.product = { name: '', price: 0, quantity: 0 , description: '' , category: ''};
    this.selectedFile = undefined;
  }

}
