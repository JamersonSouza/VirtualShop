import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
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

  constructor(private checkoutService : CheckoutService, private http : HttpClient){

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

   incrementQtd(itemSelect: CartItem): void{
    this.checkoutService.addToCart(itemSelect);
   }

   decrementQtd(itemSelect: CartItem): void{
    this.checkoutService.removeQtdCart(itemSelect);
   }

   finishCheckOut(): void{
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async(res : any) => {
        let stripe = await loadStripe('pk_test_51OHaapDAf4wD4vyZO8VK1I4NEE8RmjlQ2pEOxbjXNK5c6pJugBfHygrmjikIyjs7LJNDalUjqS4XlrKSFye19Q9s00JHBm8lev');
        stripe?.redirectToCheckout({
          sessionId: res.id
        })
    });
   }
}
