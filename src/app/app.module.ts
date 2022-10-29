import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { FruitComponent } from './fruit/fruit.component';
import { InstantfoodComponent } from './instantfood/instantfood.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LastpgComponent } from './lastpg/lastpg.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    CheckoutpageComponent,
    BeveragesComponent,
    FrontpageComponent,
    ChocolateComponent,
    VegetableComponent,
    FruitComponent,
    InstantfoodComponent,
    HomepageComponent,
    LastpgComponent,
    SignupSuccessComponent,
  
    
   
  ],
  imports: [
   HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
