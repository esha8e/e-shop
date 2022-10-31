import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  constructor(private http:HttpClient,private router:Router) { }
  clogin(t3:any){
    return this.http.post<any>('https://localhost:3200/Frontpage',t3)

  }
  Signup(regdata:any){
    return this.http.post<any>('https://localhost:3200/Login',regdata)
  }
 
}
