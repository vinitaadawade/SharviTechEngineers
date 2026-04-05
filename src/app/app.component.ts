import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponentComponent, FooterComponentComponent, HeaderComponentComponent,AboutComponentComponent,ContactComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sharvitech-site';
}
