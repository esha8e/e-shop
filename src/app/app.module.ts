import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlreadyUserComponent } from './already-user/already-user.component';
import { StockAdminComponent } from './stock-admin/stock-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlreadyUserComponent,
    StockAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
