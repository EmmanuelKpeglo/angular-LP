import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent {
  ngOnInit(): void {
    Aos.init();
  }
}
