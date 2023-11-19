import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { FakestoreService } from 'src/app/services/fakestore.service';
import { Product } from 'src/app/shared/models/product';
import { Subscription } from 'rxjs';

const ROW_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl:  './home.component.html',
})
export class HomeComponent implements OnInit{

  cols = 3;
  category: string | undefined
  rowHeight = ROW_HEIGHT[this.cols];

  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscriptions : Subscription | undefined; 

  constructor(private checkout : CheckoutService, private fakeAPI : FakestoreService){

  }

  ngOnInit(): void {
    // console.log("AQ:", this.fakeAPI.
    // getAllProducts()
    // .subscribe( (prod) =>{
    //   console.log('aq2: ', prod)
    //   this.products=prod;
    // })
    // );
    this.getAllProducts();
  }

  getAllProducts():void{
    this.productsSubscriptions = this.fakeAPI.getAllProducts(this.count, this.sort, this.category)
    .subscribe((p) => {
      this.products = p;
    })
  }

  onColumsCountChange(colsNumber : number): void{
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
    console.log('aq:', this.cols, 'aq2: ', this.rowHeight)
  }

  getCategory(categorySelected: string): void{
    this.category = categorySelected;
    this.getAllProducts();
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

  ItemsCountChange(newCount: number):void{
      this.count = newCount.toString();
      this.getAllProducts();
  }

  sortChange(newSort : string):void{
    this.sort = newSort;
    this.getAllProducts();
  }
}
