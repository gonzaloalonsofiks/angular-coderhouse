import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { FormsModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    HomeModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    UsersModule,
  ],
  exports: [DashComponent],
})
export class DashModule {}
