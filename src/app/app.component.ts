import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./component/header/header.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'north-east-pmc-website';
  containerClass: any;
}
