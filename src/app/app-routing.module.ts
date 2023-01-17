import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminCartComponent } from './carts/components/admincart/admincart.component';
import { AdminAllProductsComponent } from './products/components/adminall-products/adminall-products.component';
import { AdminProductsDetailsComponent } from './products/components/adminproducts-details/adminproducts-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:"adminproducts" , component:AdminAllProductsComponent},
  {path:"admindetails/:id" , component:AdminProductsDetailsComponent},
  {path:'admincart' , component:AdminCartComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
