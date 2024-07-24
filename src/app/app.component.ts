import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  styles: `h1{color:red;}`, //not better approach
  template: `<h1>hello world</h1>
    <p>hello world</p>`, //not better approach
  templateUrl: './app.component.html', //better approach
  styleUrl: './app.component.css', //better approach
})
export class AppComponent {
  title = 'my-first-angular-app';
}
