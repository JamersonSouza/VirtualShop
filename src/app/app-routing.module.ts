import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/pages/home/home.component';
import { CheckoutComponent } from './shared/components/pages/checkout/checkout.component';

const routes: Routes = [{
  path: 'home', 
  component: HomeComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
path: 'checkout', component: CheckoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
