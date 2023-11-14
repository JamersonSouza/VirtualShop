import { Component, OnInit } from '@angular/core';
import { cart } from './shared/models/cart';
import { CheckoutService } from './services/checkout.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cartItems]="checkout"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  checkout : cart = {items:[]};
  
  constructor(private checkoutService : CheckoutService){

  }
  ngOnInit(): void {
    this.checkoutService.checkout.subscribe((cart) => {
      this.checkout = cart;
    })
  }
}
