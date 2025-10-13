import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./component/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'north-east-pmc-website';
  containerClass: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
