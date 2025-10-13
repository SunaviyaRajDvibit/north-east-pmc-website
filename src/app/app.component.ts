import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./component/header/header.component";
import { HomeLayoutComponent } from "./Layout/home-layout/home-layout.component";
import { AboutUsComponent } from "./component/about-us/about-us.component";
import { ProjectsComponent } from './component/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, HomeLayoutComponent, AboutUsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'north-east-pmc-website';
  containerClass: any;
}
