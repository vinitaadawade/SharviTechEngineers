import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        const navbar = document.getElementById('navbarMenu');

        if (navbar && navbar.classList.contains('show')) {

          const collapse = bootstrap.Collapse.getInstance(navbar) 
          || new bootstrap.Collapse(navbar);

          collapse.hide();
        }

      }

    });

  }
}
