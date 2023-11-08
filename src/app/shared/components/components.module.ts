import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductHeaderComponent } from './pages/UIComponents/product-header/product-header.component';
import { FiltersComponent } from './pages/UIComponents/filters/filters.component';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, ProductHeaderComponent, FiltersComponent],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [HeaderComponent, HomeComponent]
})
export class ComponentsModule { }
