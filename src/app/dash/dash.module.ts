import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeModule } from './pages/home/home.module';
import { FormsModule } from './pages/forms/new-user.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    HomeModule,
    FormsModule,
    MatToolbarModule,
    UsersModule,
  ],
  exports: [DashComponent],
})
export class DashModule {}
