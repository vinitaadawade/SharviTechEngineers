import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  constructor(private router: Router) {}
  
// ✅ MAIN CATEGORIES
  products = [
    {
      name: 'Pipes & Fittings',
      image: 'assets/products/pipes.jpg'
    },
    {
      name: 'Electrical Materials',
      image: 'assets/products/electrical.png'
    },
    {
      name: 'Structural Materials',
      image: 'assets/products/structural.jpg'
    },
    {
      name: 'Fire Fighting',
      image: 'assets/products/fire.jpg'
    },
    {
      name: 'Insulation Materials',
      image: 'assets/products/insulation.jpg'
    },
    {
      name: 'Fasteners',
      image: 'assets/products/fasteners.jpg'
    }
  ];

  // ✅ NAVIGATE TO PRODUCTS PAGE WITH CATEGORY
  openCategory(category: string) {
    this.router.navigate(['/product'], {
      queryParams: { category: category }
    });
  }

}
