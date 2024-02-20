import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserGalleryComponent } from './pages/user-gallery/user-gallery.component';
import { CeramicaComponent } from './pages/ceramica/ceramica.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: UserGalleryComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ceramica', component: CeramicaComponent },
];
