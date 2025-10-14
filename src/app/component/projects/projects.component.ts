import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  projects = [
    {
      title: 'C.R. Patil Bunglow',
      description:
        'Our post-construction services give you peace of mind knowing that we are still here for you even after.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FC.R.%20Patil.jpg?alt=media&token=c141868a-fb94-49de-a0b7-403b93f8671e',
      link: '#'
    },
    {
      title: 'Happy Exotica',
      description:
        'Creative architectural designs that blend functionality, aesthetics, and sustainability.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FHappy-ex.jpg?alt=media&token=b877a0b0-2fc2-4b2f-a9d4-4c871019a951',
      link: '#'
    },
    {
      title: 'Rajhans Altezza',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FG-602.jpg?alt=media&token=9d3b58cf-6e7a-4064-8662-dbf263ac8e7e',
      link: '#'
    },
    {
      title: 'Celestial Dream',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FC-1102%2C%20Celestial%20Dream.jpg?alt=media&token=a9df7cbe-05c3-449c-9de1-08feb701f4ce',
      link: '#'
    },
    {
      title: 'Adwita Hospital',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FAdwita%20Hospital%20.jpg?alt=media&token=2b5e26b4-8b83-4791-93a6-53464c74a12f',
      link: '#'
    },
    {
      title: 'Infinity Arbor',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2Fcp1.jpg?alt=media&token=e37fcc46-a6a4-4261-934d-7c627cddbb07',
      link: '#'
    }
    ,
    {
      title: 'Ashirwad Farm',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2Fdb-1.jpg?alt=media&token=39e3f171-43a2-4748-852a-c6db69cb766f',
      link: '#'
    }
    ,
    {
      title: 'Niti Nagar',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2FNew%2FCR-2.jpg?alt=media&token=49124144-0b1c-4239-8233-421dd8d4bf9f',
      link: '#'
    }
  ];
}
