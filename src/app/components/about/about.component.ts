import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'Things to know about Cole Dynamics'

  ngOnInit(): void {
    Aos.init();
  }
}
