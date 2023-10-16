import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewUserComponent],
  imports: [CommonModule, SharedModule],
  exports: [NewUserComponent],
})
export class FormsModule {}
