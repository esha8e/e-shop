import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyUserComponent } from './already-user/already-user.component';
import { LoginComponent } from './login/login.component';
import { NavigationpageComponent } from './navigationpage/navigationpage.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'navigationpage',component:NavigationpageComponent},
  {path:'already-user',component:AlreadyUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
