import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuLink } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  menuLinks: NavMenuLink[] = [
    { name: 'Inicio', url: '/' },
    { name: 'Yo', url: '/me' },
    { name: 'Mi Equipo', url: '/team' },
    { name: 'Conocimiento', url: '/knowledge' },
    { name: 'Servicios', url: '/services' },
  ];
}
