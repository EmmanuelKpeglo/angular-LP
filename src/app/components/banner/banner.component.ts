import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
  @Input() heroSource = '';
  @Input() title = '';
  @Input() page = '';
}
