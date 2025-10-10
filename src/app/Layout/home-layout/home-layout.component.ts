import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

  @ViewChild('compareContainer') compareContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;
  @ViewChild('handle') handle!: ElementRef<HTMLDivElement>;

  isDragging = false;

  ngAfterViewInit(): void {
    const container = this.compareContainer.nativeElement;
    container.addEventListener('mousedown', () => this.startDrag());
    container.addEventListener('mouseup', () => this.stopDrag());
    container.addEventListener('mouseleave', () => this.stopDrag());
    container.addEventListener('mousemove', (e) => this.moveHandle(e));

    // For touch devices
    container.addEventListener('touchstart', () => this.startDrag());
    container.addEventListener('touchend', () => this.stopDrag());
    container.addEventListener('touchmove', (e) => this.moveHandle(e));
  }

  startDrag() {
    this.isDragging = true;
  }

  stopDrag() {
    this.isDragging = false;
  }

  moveHandle(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    const container = this.compareContainer.nativeElement;
    const overlay = this.overlay.nativeElement;
    const handle = this.handle.nativeElement;

    const rect = container.getBoundingClientRect();
    const clientX =
      (event as MouseEvent).clientX ||
      (event as TouchEvent).touches[0].clientX;

    let position = (clientX - rect.left) / rect.width;
    position = Math.max(0, Math.min(1, position));

    overlay.style.width = position * 100 + '%';
    handle.style.left = position * 100 + '%';
  }

  roleLeftItem = [
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fproject.png?alt=media&token=d605452c-20d6-416a-9458-d2d331a808a9',
      alt: 'Channelizing',
      text: 'Channelizing'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Ftime-management%20(2).png?alt=media&token=427fd258-73b9-4890-98b6-4cc03dd549d8',
      alt: 'Timelines',
      text: 'Timelines'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Frupee.png?alt=media&token=64fd0577-4374-45c4-ba84-3a9a4c7b4b3d',
      alt: 'Prevent Incorrect Charges',
      text: 'Prevent Incorrect Charges'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fdiagram%20(1).png?alt=media&token=98feb378-c6d9-4991-9fdb-f295a74ec571',
      alt: 'Daily Progress Report',
      text: 'Daily Progress Report'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fgroup.png?alt=media&token=43186e06-00aa-4640-a5dc-49c144f4d344',
      alt: 'Daily Manpower Report',
      text: 'Daily Manpower Report'
    }
  ];

  roleRighrItem = [
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fassessment.png?alt=media&token=a248f0de-a2ba-4f6c-a1c9-63b7a7055cfa',
      alt: 'Quality-control',
      text: 'Quality control'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Ftime-management%20(2).png?alt=media&token=427fd258-73b9-4890-98b6-4cc03dd549d8',
      alt: 'Sitemonitoring',
      text: 'Site monitoring'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Frupee.png?alt=media&token=64fd0577-4374-45c4-ba84-3a9a4c7b4b3d',
      alt: 'NecessaryModification',
      text: 'Necessary Modification'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fdiagram%20(1).png?alt=media&token=98feb378-c6d9-4991-9fdb-f295a74ec571',
      alt: 'Update requirements',
      text: 'Update requirements'
    },
    {
      type: 'image',
      img: 'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Frole%2Fgroup.png?alt=media&token=43186e06-00aa-4640-a5dc-49c144f4d344',
      alt: 'Hustle free',
      text: 'Hustle free'
    }
  ];

  projects = [
    {
      title: 'Building Construction',
      description:
        'Our post-construction services give you peace of mind knowing that we are still here for you even after.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2Four-project-1-1.jpg?alt=media&token=a5766466-f285-414f-a308-cf3c5a47a0e4',
      link: '#'
    },
    {
      title: 'Architecture Design',
      description:
        'Creative architectural designs that blend functionality, aesthetics, and sustainability.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2Four-project-2.jpg?alt=media&token=9931bd81-a6b2-4697-9a7d-917cce1c1642',
      link: '#'
    },
    {
      title: 'Building Renovation',
      description:
        'Enhancing existing structures with modern upgrades, efficiency, and design precision.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2Four-project-3.jpg?alt=media&token=5ce7605b-618c-4877-876f-4368a8a179d2',
      link: '#'
    },
    {
      title: 'Expression',
      description:
        'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2Four-project-4.jpg?alt=media&token=d3be7353-2a11-4d3a-8a7a-6dee59d97444',
      link: '#'
    }
  ];

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
    // {
    //   title: 'Expression',
    //   description:
    //     'We bring creativity and practicality together — crafting expressive designs that inspire and perform.',
    //   image:
    //     'https://firebasestorage.googleapis.com/v0/b/north-east-pmc.appspot.com/o/website-images%2Fproject-img%2Four-project-4.jpg?alt=media&token=d3be7353-2a11-4d3a-8a7a-6dee59d97444',
    //   link: '#'
    // }
  ];
}
