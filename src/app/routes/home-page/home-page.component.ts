import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  projects = [
    {
      name: 'Color Flipper',
      description: 'Um simples gerador de cores aleatórias.',
      github: '',
      live: '',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Porsche Brasil',
      description: 'Clone do site da Porsche Brasil',
      github: '',
      live: '',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Todo List',
      description: 'Um simples gerenciador de tarefas.',
      github: '',
      live: '',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
  ];

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
        'https://icongr.am/devicon/angularjs-original.svg?size=148&color=currentColor',
    },
    // {
    //   name: 'Postgresql',
    //   image:
    //     'https://icongr.am/devicon/postgresql-original.svg?size=148&color=currentColor',
    // },
    {
      name: 'Nodejs',
      image:
        'https://icongr.am/devicon/nodejs-original.svg?size=148&color=currentColor',
    },
    {
      name: 'Mysql',
      image:
        'https://icongr.am/devicon/mysql-original.svg?size=148&color=currentColor',
    },
  ];
}
