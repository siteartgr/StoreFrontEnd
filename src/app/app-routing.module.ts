
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent,canActivate: [AuthGuard] },
  { path: 'customers/new', component: CustomerFormComponent,canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent,canActivate: [AuthGuard] },
  { path: 'products/new', component: ProductFormComponent,canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrderListComponent,canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
