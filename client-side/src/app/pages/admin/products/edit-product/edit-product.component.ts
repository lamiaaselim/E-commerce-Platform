import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Swal from 'sweetalert2'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';
import { SocketService } from '../../../../services/socket.service';




@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})

export class EditProductComponent implements OnInit {
  @Input() product!: Product; // Pass the product to edit
  @Output() productUpdated = new EventEmitter<Product>(); // Emit updated product
  editProductForm!: FormGroup;

  constructor(

    private fb: FormBuilder,
    private productService: ProductService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.editProductForm = this.fb.group({
      name: [this.product?.name, Validators.required],
      description: [this.product?.description, Validators.required],
      category: [this.product?.category, Validators.required],
      subCategory: [this.product?.subCategory],
      price: [this.product?.price, [Validators.required, Validators.min(0)]],
      quantity: [
        this.product?.quantity,
        [Validators.required, Validators.min(0)],
      ],
      picture: [null], // File input for image update
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.editProductForm.patchValue({ picture: file });
  }

  onSubmit(): void {
    if (this.editProductForm.valid) {
      const updatedData = new FormData();
      updatedData.append('name', this.editProductForm.get('name')?.value);
      updatedData.append('description', this.editProductForm.get('description')?.value);
      updatedData.append('category', this.editProductForm.get('category')?.value);
      updatedData.append('price', this.editProductForm.get('price')?.value);
      updatedData.append(
        'quantity',
        this.editProductForm.get('quantity')?.value
      );
      if (this.editProductForm.get('picture')?.value) {
        updatedData.append(
          'picture',
          this.editProductForm.get('picture')?.value
        );
      }

      // Send the FormData directly to the service
      this.productService
        .updateProduct(this.product._id, updatedData)
        .subscribe((updatedProduct) => {
          this.socketService.emit('productUpdated', updatedProduct);
          // Emit the updated product after successful update
          this.productUpdated.emit(updatedProduct);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product has been updated and saved",
            showConfirmButton: false,
            timer: 1500
          });
        });
    }
  }
}
