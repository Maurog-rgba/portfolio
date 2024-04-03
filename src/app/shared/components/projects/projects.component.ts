import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Color Flipper',
      description: 'A simple color palette generator.',
      github: 'https://github.com/Maurog-rgba/color-flipper',
      live: 'https://folor-clipper.netlify.app/src/app/palette/palette.html',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Porsche Brasil',
      description: 'A clone of the Porsche Brasil website.',
      github: '',
      live: '',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Todo List',
      description: 'A simple todo list app with local storage support.',
      github: '',
      live: '',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
  ];
}
