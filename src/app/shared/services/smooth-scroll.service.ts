import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmoothScrollService {
  constructor() {}

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
