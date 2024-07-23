import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {NavBarComponent} from './app/Navbar/navbar.component';

bootstrapApplication(NavBarComponent, appConfig)
  .catch((err) => console.error(err));
