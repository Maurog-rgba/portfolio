import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { TechStackComponent } from '../../shared/components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TechStackComponent],
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
}
