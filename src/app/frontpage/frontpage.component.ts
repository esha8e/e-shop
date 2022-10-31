import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-Frontpage',
  templateUrl: './Frontpage.component.html',
  styleUrls: ['./Frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  regdata={
    emailid:"",
    password:""
  }

  constructor(private api:ProjectserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  Clogin(){
    this.api.clogin(this. regdata).subscribe((regdata)=>{
      if(regdata.success === true){
        this.router.navigate(['/Frontpage'])
      }
      else
      {
        alert(regdata.success)
      }
    })
  }

 

}