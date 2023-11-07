import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  exports:[MatMenuModule, MatSidenavModule, MatGridListModule, MatCardModule, MatIconModule,
    MatExpansionModule, MatButtonModule, MatListModule, MatBadgeModule, MatTableModule, MatToolbarModule,
    MatSnackBarModule],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule
  ]
})
export class MaterialModulesModule { }
