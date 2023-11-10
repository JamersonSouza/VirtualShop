import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit{

  @Output() showCategories = new EventEmitter<string>();

  categorias = ['camisas', 'tênis'];

  constructor() {
    
  }

  ngOnInit(): void {
  }

  showCategory(category: string): void {
    this.showCategories.emit(category);
  }


}
