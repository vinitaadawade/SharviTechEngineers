import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productcomponent.component.html',
  styleUrl: './productcomponent.component.css'
})
export class ProductcomponentComponent {
activeCategory = 'ALL';

  constructor(private route: ActivatedRoute,private router: Router) {}

ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activeCategory = params['category'] || 'ALL';
    });
  }

  // ✅ FULL CATEGORY + SUBCATEGORY DATA
  categories = [
  {
    name: 'Pipes & Fittings',
    sub: [
      { name: 'GI Pipe', desc: 'Galvanized pipes for water supply', image: 'assets/products/gi.jpg' },
      { name: 'MS Pipe', desc: 'Mild steel pipes for structure', image: 'assets/products/ms.jpg' },
      { name: 'SS Pipe', desc: 'Corrosion-resistant stainless pipes', image: 'assets/products/ss.jpg' },
      { name: 'UPVC Pipe', desc: 'Lightweight plumbing pipes', image: 'assets/products/upvc.jpg' },
      { name: 'Copper Pipe', desc: 'used for underground water lines and heavy-duty applications.', image: 'assets/products/copper.jpg' }
    ]
  },
  {
    name: 'Electrical Materials',
    sub: [
      { name: 'Cables', desc: 'Power & control cables', image: 'assets/products/cables.jpg' },
      { name: 'Glands', desc: 'Cable protection fittings', image: 'assets/products/glands.jpg' },
      { name: 'Terminals', desc: 'Electrical connectors', image: 'assets/products/terminals.jpg' },
      { name: 'Conduit', desc: 'Non-metallic, corrosion-resistant, and ideal for wet or underground locations.', image: 'assets/products/Conduit.jpg' },
      { name: 'RaceWays', desc: 'enclosed channels—metallic or non-metallic—designed to house, organize, and protect electrical wiring and data cables.', image: 'assets/products/raceway.png' },
      { name: 'Cable Tray', desc: 'Essential in industrial plants, data centers, and commercial buildings', image: 'assets/products/cableTray.jpg' }
    ]
  },
  {
    name: 'Structural Materials',
    sub: [
      { name: 'Cement', desc: 'OPC/PPC cement', image: 'assets/products/cement.jpg' },
      { name: 'Steel Bars', desc: 'TMT bars for RCC', image: 'assets/products/steel.jpg' },
      { name: 'Welding Rods', desc: 'Welding consumables', image: 'assets/products/welding.jpg' }
    ]
  },
  {
    name: 'Fire Fighting',
    sub: [
      { name: 'Fire Extinguishers', desc: 'Safety equipment', image: 'assets/products/extinguisher.jpg' },
      { name: 'Fire Hose', desc: 'Water delivery hoses', image: 'assets/products/hose.jpg' },
      { name: 'Sprinkler System', desc: 'Fire suppression system', image: 'assets/products/sprinkler.jpg' },
      { name: 'Pipes', desc: 'high-strength piping systems (often red-painted steel or CPVC)', image: 'assets/products/firePipe.jpg' }
    ]
  },
  {
    name: 'Insulation Materials',
    sub: [
      { name: 'Pipe Insulation', desc: 'Thermal pipe covering', image: 'assets/products/pipe.jpg' },
      { name: 'Thermal Insulation', desc: 'Heat resistant material', image: 'assets/products/thermal.jpg' }
    ]
  },
  {
    name: 'Fasteners',
    sub: [
      { name: 'Bolts', desc: 'Heavy duty bolts', image: 'assets/products/bolts.jpg' },
      { name: 'Nuts', desc: 'Threaded fasteners', image: 'assets/products/nuts.jpg' },
      { name: 'Washers', desc: 'Load distribution', image: 'assets/products/washers.jpg' },
      { name: 'Screws', desc: 'Fixing screws', image: 'assets/products/screws.jpg' }
    ]
  }
];

  // ✅ TABS (INCLUDING ALL)
  getAllCategories() {
    return ['ALL', ...this.categories.map(c => c.name)];
  }

  // ✅ TAB CLICK
  selectCategory(name: string) {
    this.activeCategory = name;
  }

  // ✅ FILTER SUBCATEGORIES
  getSubCategories() {

    if (this.activeCategory === 'ALL') {
      return this.categories.flatMap(c => c.sub);
    }

    return this.categories.find(c => c.name === this.activeCategory)?.sub || [];
  }

  // ✅ GET CATEGORY NAME (FOR LABEL)
  getCategoryName(subName: string) {
    const cat = this.categories.find(c =>
      c.sub.some(s => s.name === subName)
    );
    return cat?.name || '';
  }

}
