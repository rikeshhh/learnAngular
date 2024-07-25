import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angular-app';
  imgUrl: string =
    'https://cdn.pixabay.com/photo/2024/03/01/15/03/portal-8606707_1280.png';
  isDisabled: boolean = true;
}
