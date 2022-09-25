import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginpg={
    loginpgemail:"",
    loginpgpassword:"",
    loginpgphonenumber:""
  }
 
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
 login()
 {
  this.api.Login(this.loginpg).subscribe((loginpg)=>{

  })
  alert("success");
 }
}
