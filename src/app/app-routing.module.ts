import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { StockAdminComponent } from './stock-admin/stock-admin.component';
import { LoginComponent } from './login/login.component';
import {BeveragesComponent} from './beverages/beverages.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import {FruitComponent} from './fruit/fruit.component';
import {InstantfoodComponent} from './instantfood/instantfood.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [ 
  {path:'',component:FrontpageComponent},
  {path:'StockAdmin',component:StockAdminComponent},
  {path:'Login',component:LoginComponent},
  {path :"Homepage",component:HomepageComponent},
  {path:'Beverages',component:BeveragesComponent},
  {path:'Checkoutpage',component:CheckoutpageComponent},
  {path:'Vegetable',component:VegetableComponent},
  {path:'Chocolate',component:ChocolateComponent},
  {path:'Fruit',component:FruitComponent},
  {path:'Instantfood',component:InstantfoodComponent},
  {path:'Cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
