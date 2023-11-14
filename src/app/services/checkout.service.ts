import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, cart } from '../shared/models/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  checkout = new BehaviorSubject<cart>({items: []})

  constructor(private snackBar : MatSnackBar) { }

  addToCart(item : CartItem): void{
    const items = [...this.checkout.value.items];
    const itemInCar = items.find( (i) => i.productUUID === item.productUUID);
    
    if(itemInCar){
      itemInCar.qtd += 1; // pra cada item adicionado ao carrinho é incrementado +1 na qtdade
    }else{
      items.push(item);//add o item a lista
    }

    this.checkout.next({items});
    this.snackBar.open('1 item adicionado ao carrinho:', 'Ok', {duration: 5000});
    console.log(this.checkout.value);
  }

  calculateTotal(items: Array<CartItem>): number {
    return items.map((i) => i.price*i.qtd)
    .reduce((lastValue, currentValue) => lastValue+currentValue,0)
  }

  clear():void{
    this.checkout.next({items: []})
    this.snackBar.open('Itens removidos do carrinho:', 'Ok', {duration: 5000});
  }

}
