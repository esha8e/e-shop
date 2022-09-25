import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  Login(loginpg:any){
    return this.http.post<any>("http://localhost:3000/login",loginpg)
  }

  

  
}
