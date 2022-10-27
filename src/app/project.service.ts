import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  signin(loginpg: { loginemail: string; loginpassword: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  signup(loginpg:any){
    return this.http.get<any>("https://localhost:3000/Login",loginpg)
  }

//signin(data:any){
//  return this.http.post<any>("https://localhost:3000/signin",data)
//}
}
