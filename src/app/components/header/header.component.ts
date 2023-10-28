import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  opened = false;

  public openNav() {
    // document.getElementById("myNav").style.width = "100%";
    this.opened = true;
  }
  
  public closeNav() {
    // document.getElementById("myNav").style.width = "0%";
    this.opened = false;
  }
}
