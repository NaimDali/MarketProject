import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartsService } from '../../services/carts.service';
import {ProductsService} from '../../../products/services/products.service';
@Component({
  selector: 'app-admincart',
  templateUrl: './admincart.component.html',
  styleUrls: ['./admincart.component.scss']
})
export class AdminCartComponent implements OnInit {
  adminform!:FormGroup;
  constructor(private service:CartsService , private build:FormBuilder , private productService:ProductsService) { 
  }
  carts:any[] = [];
  products:any[] = [];
  total = 0
  details:any;
  ngOnInit(): void {
   this.adminform = this.build.group({
     start: [''],
     end:['']
   })
    this.getAllCarts()
  }



  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }

  applyFilter() {
    let date = this.adminform.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    })
  }

  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }
 
  
  view(index:number) {
    this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products) {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
    console.log(this.details)
  } 
}
