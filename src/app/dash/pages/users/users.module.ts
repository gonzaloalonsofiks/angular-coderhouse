import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';
import { FormsModule } from 'src/app/dash/pages/forms/new-user.module';

@NgModule({
  declarations: [UsersComponent, NewUserDialogComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [UsersComponent],
})
export class UsersModule {}
