import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakestoreService } from 'src/app/services/fakestore.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy{

  @Output() showCategories = new EventEmitter<string>();
  
  categorias : Array<string> | undefined;
  categoriasSub : Subscription | undefined;


  constructor(private fakeStore : FakestoreService) {
    
  }
  ngOnDestroy(): void {
    if(this.categoriasSub){
      this.categoriasSub.unsubscribe();
    }
  }

  ngOnInit(): void {
   this.categoriasSub = this.fakeStore.getAllCategories()
    .subscribe( (response) => {
        this.categorias = response;
    });
  }

  showCategory(category: string): void {
    this.showCategories.emit(category);
  }


}
