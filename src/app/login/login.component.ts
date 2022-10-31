import { Component, OnInit } from '@angular/core';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  regdata={
   
    email:"",
    password:""
    

  }

  constructor(private api:ProjectserviceService) { }

  ngOnInit(): void {}
   signup()
  {
    console.log(this.regdata)
   this.api.Signup(this.regdata).subscribe((regdata)=>{
    alert("success");
   })
   
  }

}