import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';

register();

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TechStackComponent implements AfterViewInit {
  tech_stack = [
    {
      name: 'HTML5',
      image:
        'https://icongr.am/devicon/html5-original.svg?size=148&color=currentColor',
    },
    {
      name: 'CSS3',
      image:
        'https://icongr.am/devicon/css3-original.svg?size=148&color=currentColor',
    },
    {
      name: 'Javascript',
      image:
        'https://icongr.am/devicon/javascript-original.svg?size=148&color=currentColor',
    },
    {
      name: 'Typescript',
      image:
        'https://icongr.am/devicon/typescript-original.svg?size=148&color=currentColor',
    },
    {
      name: 'Angular',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      name: 'Bootstrap',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Angular Material',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg',
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    const SwiperContainer =
      this.elementRef.nativeElement.querySelector('swiper-container');
    const swiperAtributes = this.setSwiperAttributes(true, 2500, 10, {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    });

    if (SwiperContainer) {
      Object.assign(SwiperContainer, swiperAtributes);
      SwiperContainer.initialize();
    } else {
      console.error('SwiperContainer not found');
    }
  }

  setSwiperAttributes(
    loop: boolean,
    speed: number,
    autoplay: number,
    breakpoints: any
  ) {
    return {
      loop: loop,
      speed: speed,
      autoplay: {
        delay: autoplay,
      },
      breakpoints: breakpoints,
    };
  }
}
