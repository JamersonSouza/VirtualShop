import { Component, OnInit } from '@angular/core';
import { CartItem, cart } from 'src/app/shared/models/cart';
import {v4 as uuidv4, v4} from 'uuid';
import {MatTableModule} from '@angular/material/table';

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
    'product', 
    'name', 
    'price', 
    'qtd', 
    'total', 
    'action', 'productUUID'
  ]

  constructor(){

  }
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  // calculateTotal(items: Array<CartItem>): number {
  //     return items.map((i) => i.price*i.qtd)
  //     .reduce((lastValue, currentValue) => lastValue+currentValue,0)
  // }

}
