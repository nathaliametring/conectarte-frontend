import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { CeramicaComponent } from '../../pages/ceramica/ceramica.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, AboutComponent, ContactComponent, CeramicaComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent { }
