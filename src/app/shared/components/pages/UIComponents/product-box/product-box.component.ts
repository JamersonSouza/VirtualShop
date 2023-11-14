import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import {v4 as uuidv4, v4} from 'uuid';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit{

  @Input() withMode = false;

  product : Product | undefined = {
    productUUID: uuidv4(),
    title: 'Tênis Olympikus',
    price: 100,
    category: 'Esportes',
    description: 'desc qualquer',
    image: 'https://via.placeholder.com/150'
  };

  @Output() addItemToCarEmiter = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {
  }

  addItemToCart(): void{
    this.addItemToCarEmiter.emit(this.product);
  }

}
