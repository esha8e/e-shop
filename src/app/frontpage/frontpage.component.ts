import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  loginpg={
    loginemail:"",
    loginpassword:""
  }

  constructor(private api:ProjectService, private router:Router) { }

  ngOnInit(): void {
  }
Signin(){
 this.api.signin(this.loginpg).subscribe((signin=>{
  if(signin.success==true){

 })
      this.router.navigate(['/Homepage'])
    }
    else: any
{
  alert("loginpg.success")
}
  }
