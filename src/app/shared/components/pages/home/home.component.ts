import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:  './home.component.html',
})
export class HomeComponent implements OnInit{

  cols = 0;
  category: string | undefined

  constructor(){

  }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNumber : number): void{
    this.cols = colsNumber;
  }

  getCategory(categorySelected: string): void{
    this.category = categorySelected;
  }

}
