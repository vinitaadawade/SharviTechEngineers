import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { ProductcomponentComponent } from './components/productcomponent/productcomponent.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponentComponent
    },

    {
        path: 'about',
        component: AboutComponentComponent
    },

    {
        path: 'contact',
        component: ContactComponentComponent
    },

    {
        path: 'product',
        component: ProductcomponentComponent
    }
    
];
