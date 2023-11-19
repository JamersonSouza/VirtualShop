import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styles: [
  ]
})
export class ProductHeaderComponent implements OnInit{

  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = '';
  itemShowCount = 0;

  constructor(){

  }
  ngOnInit(): void {
  }


  sortUpdate(newSort : string): void{
    this.sort = newSort;
    console.log('aq: ', this.sort)
    this.sortChange.emit(newSort);
  }

  itemsUpdate(count : number): void {
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }

  columnsUpdateLayout(colNumber: number):void{
      this.columsCountChange.emit(colNumber);
  }

}
