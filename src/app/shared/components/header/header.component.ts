import { Component, OnInit } from '@angular/core';

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

  constructor() {}

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
}
