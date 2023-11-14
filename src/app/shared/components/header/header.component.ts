import { CheckoutService } from 'src/app/services/checkout.service';
import { cart, CartItem } from './../../models/cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styles: [
  ]
})
export class HeaderComponent{

  checkout : cart = {items: []}; 
  public itemsQtd : number = 0;
  
  @Input()
  get cartItems() : cart {
    return this.checkout;
  }

  set cartItems(cartItems: cart){
    this.checkout = cartItems;
    this.itemsQtd = cartItems.
    items.map((item) => item.qtd)
    .reduce((prev, curretValue) => prev + curretValue, 0);
  }
  
  constructor(private checkService : CheckoutService){

  }

  getTotal(items: Array<CartItem>): number{
    return this.checkService.calculateTotal(items);
  }

  clearCheckout(): void{
    this.checkService.clear();
  }
  

}
