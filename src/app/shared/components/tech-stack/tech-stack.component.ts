import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import { tech_stack } from '../../data/tech-stack.data';

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
  tech_stack = tech_stack;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    const SwiperContainer =
      this.elementRef.nativeElement.querySelector('swiper-container');
    const swiperAtributes = this.setSwiperAttributes(true, 2500, 10, {
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
