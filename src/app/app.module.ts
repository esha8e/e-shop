import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlreadyUserComponent } from './already-user/already-user.component';
import { StockAdminComponent } from './stock-admin/stock-admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CategoryComponent } from './category/category.component';
import { NavigationpageComponent } from './navigationpage/navigationpage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { BeveragesComponent } from './beverages/beverages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlreadyUserComponent,
    StockAdminComponent,
    CategoriesComponent,
    AdminloginComponent,
    CategoryComponent,
    NavigationpageComponent,
    CartComponent,
    CheckoutpageComponent,
    BeveragesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
