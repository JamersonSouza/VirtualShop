import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CartItem, cart } from 'src/app/shared/models/cart';
import {v4 as uuidv4, v4} from 'uuid';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit{

  cart: cart = {items: [{
    productUUID: uuidv4(),
    product: "https://via.placeholder.com/150",
    name: 'Camisa Yu Yu Hakusho',
    price: 99,
    qtd: 2,
  }, {
    productUUID: uuidv4(),
    product: "https://via.placeholder.com/150",
    name: 'Camisa Green Day',
    price: 60,
    qtd: 8,
  }]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'productUUID',
    'product', 
    'name', 
    'price', 
    'qtd', 
    'total', 
    'action', 
  ]

  constructor(private checkoutService : CheckoutService){

  }
  ngOnInit(): void {
    this.checkoutService.checkout.subscribe((cart: cart) => {
      this.cart = cart;
      this.dataSource = this.cart.items;
    })
  }

   calculateTotal(items: Array<CartItem>): number {
       return this.checkoutService.calculateTotal(items);
   }

   clearCart(): void{
    this.checkoutService.clear();
   }

   removeItemCart(itemSelect: CartItem): void{
    this.checkoutService.removeItem(itemSelect);
   }

}
