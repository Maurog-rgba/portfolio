import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Color Flipper',
      description: 'A simple color palette generator.',
      github: 'https://github.com/Maurog-rgba/color-flipper',
      live: 'https://folor-clipper.netlify.app/src/app/palette/palette.html',
      image: '../../../../assets/images/projects/color-flipper.png',
      stack:
        'https://icongr.am/devicon/javascript-original.svg?size=148&color=currentColor',
    },
    {
      name: 'Porsche Brasil',
      description: 'A clone of the Porsche Brasil website.',
      github: '',
      live: '',
      image: '../../../../assets/images/projects/porsche-brasil.png',
      stack:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      name: 'Todo List',
      description: 'A simple todo list app with local storage support.',
      github: 'https://github.com/Maurog-rgba/nodejs-todo-list',
      live: '',
      image: '../../../../assets/images/projects/todo-list.png',
      stack:
        'https://icongr.am/devicon/nodejs-original.svg?size=148&color=currentColor',
    },
    {
      name: 'QR Code Component',
      description: 'A simple QR code component.',
      github: 'https://github.com/Maurog-rgba/qr-code-component',
      live: 'https://main--solutionqrcodecomponent.netlify.app',
      image: '../../../../assets/images/projects/qrcode-component.png',
      stack:
        'https://icongr.am/devicon/html5-original.svg?size=148&color=currentColor',
    },
  ];

  ngOnInit(): void {
    this.animateOnScroll();
  }

  animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
