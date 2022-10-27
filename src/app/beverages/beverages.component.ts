import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {





 

  constructor(private api: ProjectService,private cartService:CartService) { }

  ngOnInit(): void {
  

  }

   
  }
     

