import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
