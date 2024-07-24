import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  // templateUrl: './app.component.html',
  template: `
    <h1>Hello world</h1>
    <p>My first Angular app</p>
    <button>Click me</button>
  `,
  styles: `h1{color:red}
  p{color:blue}
  button{color:green}
  `,
  // styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angular-app';
}
