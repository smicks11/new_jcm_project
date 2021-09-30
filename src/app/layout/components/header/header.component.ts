import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

    // public constructor(private titleService: Title) { }

    // public setTitle(newTitle: string) {
    //   this.titleService.setTitle(newTitle);
    // }

    
  
  

}
