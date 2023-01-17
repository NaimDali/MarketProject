import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { AdminProductComponent } from './components/adminproduct/adminproduct.component';
import { AdminProductsDetailsComponent } from './components/adminproducts-details/adminproducts-details.component';
import { AdminAllProductsComponent } from './components/adminall-products/adminall-products.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
    AdminAllProductsComponent,
    AdminProductsDetailsComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
