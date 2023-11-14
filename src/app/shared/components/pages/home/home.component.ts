import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Product } from 'src/app/shared/models/product';

const ROW_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl:  './home.component.html',
})
export class HomeComponent implements OnInit{

  cols = 3;
  category: string | undefined
  rowHeight = ROW_HEIGHT[this.cols];

  constructor(private checkout : CheckoutService){

  }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNumber : number): void{
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
    console.log('aq:', this.cols, 'aq2: ', this.rowHeight)
  }

  getCategory(categorySelected: string): void{
    this.category = categorySelected;
  }

  addItemToCart(product : Product):void{
      this.checkout.addToCart({
          name: product.title,
          price: product.price,
          qtd: 1,
          productUUID: product.productUUID,
          product: product.image
      });
  }
}
