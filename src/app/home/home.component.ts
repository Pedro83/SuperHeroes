import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from "../heroes-list/heroes-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
