import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControlName,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConfirmPasswordValidator } from '../../custom-validation/confirmPassword.validator';
import { ForbiddenNameValidator } from '../../custom-validation/username.validator';
import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [JsonPipe, NgIf, ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private authService: AuthService,private router: Router ,private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            ForbiddenNameValidator,
          ],
        ],
        email: [''],
        subscribe: [false],
        alternativeEmails: this.fb.array([]),
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        address: this.fb.group({
          city: [''],
          street: [''],
          building: [''],
        }),
      },
      { validators: [ConfirmPasswordValidator] }
    );
  }

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get alternativeEmails() {
    return this.registerForm.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail() {
    this.alternativeEmails.push(this.fb.control(''));
  }

  deleteInput(index: any) {
    this.alternativeEmails.removeAt(index);
  }

  setEmailValidators() {
    this.registerForm
      .get('subscribe')
      ?.valueChanges.subscribe((ckeckedValue) => {
        if (ckeckedValue) {
          this.email?.setValidators(Validators.required);
        } else {
          this.email?.clearValidators();
        }
        this.email?.updateValueAndValidity();
      });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // console.log('Registration successful', response);
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'success',
          //   title: 'Product has been updated and saved',
          //   showConfirmButton: false,
          //   timer: 3500,
          // });
          this.router.navigate(['/login']);

        },
        error: (err) => {
          // console.error('Registration failed', err);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error in Registration, please try again',
            showConfirmButton: false,
            timer: 3500,
          });
        },
      });
    }
  }
}
