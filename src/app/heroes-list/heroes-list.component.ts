import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesList } from '../heroes-list';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {
  @Input() heroesList!: HeroesList;
}
