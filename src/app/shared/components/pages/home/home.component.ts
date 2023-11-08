import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:  './home.component.html',
})
export class HomeComponent implements OnInit{

  cols = 0;

  constructor(){

  }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNumber : number): void{
    this.cols = colsNumber;
  }

}
