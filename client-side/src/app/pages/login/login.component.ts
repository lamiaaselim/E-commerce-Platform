import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          // console.log('Login successful');
          this.router.navigate(['/']);
        },
        error: (err) => {
          // console.error('Login failed', err)
          if (err.status == 401) {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Error',
              text: 'Invalid Email or Password',
              showConfirmButton: false,
              timer: 3500,
            });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Error in Login, please try again',
              showConfirmButton: false,
              timer: 3500,
            });
          }
        },
      });
    }
  }
}
