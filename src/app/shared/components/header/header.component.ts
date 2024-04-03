import { Component, OnInit } from '@angular/core';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  text = 'Frontend Developer.';
  currentText = '';
  index = 0;

  constructor(private smoothScrollService: SmoothScrollService) {}

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.index < this.text.length) {
      this.currentText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => {
        this.typeText();
      }, 100);
    }
  }

  scrollToSection(sectionId: string): void {
    this.smoothScrollService.scrollTo(sectionId);
  }
}
