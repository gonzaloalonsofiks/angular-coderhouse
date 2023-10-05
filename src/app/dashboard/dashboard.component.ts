import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  nav_menu = [
    { name: 'Inicio', url: '/' },
    { name: 'Yo', url: '/me' },
    { name: 'Mi Equipo', url: 'team' },
    { name: 'Conocimiento', url: 'knowledge' },
    { name: 'Servicios', url: 'services' },
  ];
}
