import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.userForm = this.FormBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      job_title: ['', Validators.required],
      job_area: ['', Validators.required],
      contract_type: ['', Validators.required],
    });
  }

  createUser(): void {
    if (this.userForm.invalid) {
      alert('Completa los campos obligatorios');
    } else {
      console.log(this.userForm.value);
    }
  }
}
