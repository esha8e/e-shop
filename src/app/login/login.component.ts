import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginpg={
    loginemail:"",
    loginpassword:""
  }
 
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  Signup()
  {
    this.api.signup(this.loginpg).subscribe((loginpg)=>{
     
    })
    alert("success")
    
    
  }

 
}
