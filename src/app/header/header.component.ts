import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
 
  constructor() {
    
  }
  email:string;
  ngOnInit(): void {
   const data=JSON.parse(localStorage.getItem("user")!)
   this.email=data.email;
  }
}
