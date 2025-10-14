import { Component, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  router: any;

  constructor(private offcanvasService: NgbOffcanvas) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  onAboutsUs() {
    this.router.navigate(['/about-us']);
  }

  openOffcanvas(content: any) {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'custom-offcanvas'
    });
  }
}
