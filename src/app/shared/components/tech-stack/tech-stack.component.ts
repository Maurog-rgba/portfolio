import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
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
    // {
    //   name: 'NGRX',
    //   image:
    //     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
    // },
    // {
    //   name: 'Nodejs',
    //   image:
    //     'https://icongr.am/devicon/nodejs-original.svg?size=148&color=currentColor',
    // },
  ];
}
