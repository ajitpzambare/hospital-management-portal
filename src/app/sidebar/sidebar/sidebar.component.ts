import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showFiller = false;

  constructor(private router :Router){
  }
  logOut(){
    localStorage.removeItem('user');
    location.reload();


  }
}
