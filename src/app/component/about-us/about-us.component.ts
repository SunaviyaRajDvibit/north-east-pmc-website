import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, NgbCarouselModule, NgbModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  teamMembers = [
    {
      title: 'Rahul Sharma',
      description:
        'Experienced project manager ensuring timely delivery and quality control.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff1.png?alt=media&token=7b8afe3b-abb0-4584-a0f1-52c6949419ec',
      link: '#'
    },
    {
      title: 'Anita Verma',
      description:
        'Lead architect specializing in sustainable and innovative designs.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff2.png?alt=media&token=c7fd4956-b043-463e-bcab-290ed97bb7c5',
      link: '#'
    },
    {
      title: 'Suresh Patel',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff3.png?alt=media&token=8285670e-bf0b-411e-80dc-8746ea4e553e',
      link: '#'
    },
    {
      title: 'Maya Singh',
      description:
        'Skilled civil engineer focused on infrastructure projects and urban development.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff4.png?alt=media&token=9ce8a027-c3fc-4a50-aa56-810cf896398b',
      link: '#'
    },
    {
      title: 'Rahul Sharma',
      description:
        'Experienced project manager ensuring timely delivery and quality control.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff1.png?alt=media&token=7b8afe3b-abb0-4584-a0f1-52c6949419ec',
      link: '#'
    },
    {
      title: 'Anita Verma',
      description:
        'Lead architect specializing in sustainable and innovative designs.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff2.png?alt=media&token=c7fd4956-b043-463e-bcab-290ed97bb7c5',
      link: '#'
    },
    {
      title: 'Suresh Patel',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff3.png?alt=media&token=8285670e-bf0b-411e-80dc-8746ea4e553e',
      link: '#'
    },
    {
      title: 'Maya Singh',
      description:
        'Skilled civil engineer focused on infrastructure projects and urban development.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff4.png?alt=media&token=9ce8a027-c3fc-4a50-aa56-810cf896398b',
      link: '#'
    },
    {
      title: 'Rahul Sharma',
      description:
        'Experienced project manager ensuring timely delivery and quality control.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff1.png?alt=media&token=7b8afe3b-abb0-4584-a0f1-52c6949419ec',
      link: '#'
    },
    {
      title: 'Anita Verma',
      description:
        'Lead architect specializing in sustainable and innovative designs.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff2.png?alt=media&token=c7fd4956-b043-463e-bcab-290ed97bb7c5',
      link: '#'
    },
    {
      title: 'Suresh Patel',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff3.png?alt=media&token=8285670e-bf0b-411e-80dc-8746ea4e553e',
      link: '#'
    },
    {
      title: 'Maya Singh',
      description:
        'Skilled civil engineer focused on infrastructure projects and urban development.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fservices%2Ftest%2Ff4.png?alt=media&token=9ce8a027-c3fc-4a50-aa56-810cf896398b',
      link: '#'
    }
  ];
}
