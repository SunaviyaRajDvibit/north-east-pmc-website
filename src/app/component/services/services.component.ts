import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'On-Time Delivery',
      description:
        'Our post-construction services give you peace of mind knowing that we are still here for you even after.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2FRectangle%2035.png?alt=media&token=64714032-e77b-4af1-9255-00cb71c6a686',
      link: '#'
    },
    {
      title: 'Project Records & Transparency',
      description:
        'Creative architectural designs that blend functionality, aesthetics, and sustainability.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2FRectangle%2038.png?alt=media&token=3ab12b0b-1d18-4bfe-9afb-5fdf64d2b166',
      link: '#'
    },
    {
      title: 'Timeline & Reporting',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2FRectangle%2039.png?alt=media&token=7c7fe9f6-7003-4ec4-9ccb-c6a5c84a0d3f',
      link: '#'
    },

  ];
}
