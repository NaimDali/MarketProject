import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { AdminCartComponent } from './components/admincart/admincart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    AdminCartComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CartsModule { }
