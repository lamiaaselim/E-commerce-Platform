import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/admin/products/add-product/add-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { authChildGuard, authGuard } from './guards/auth.guard';
import { OrderListComponent } from './pages/admin/orders/order-list/order-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'products', component: AllProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivateChild: [authChildGuard],
    children: [
      { path: 'add', component: AddProductComponent },
      { path: 'list', component: ProductListComponent },
      { path: 'order-list', component: OrderListComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
