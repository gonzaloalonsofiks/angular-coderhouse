import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Area {
  value: string;
  viewValue: string;
}

interface Contract {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  areas: Area[] = [
    { value: 'marketing', viewValue: 'Marketing' },
    { value: 'hr', viewValue: 'Recursos Humanos' },
    { value: 'sales', viewValue: 'Ventas' },
  ];

  contract: Contract[] = [
    { value: 'intern', viewValue: 'Intern' },
    { value: 'full-time', viewValue: 'Full Time' },
  ];

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      jobTitle: ['', Validators.required],
      jobArea: ['', Validators.required],
      contractType: ['', Validators.required],
    });
  }

  public get firstNameControl() {
    return this.userForm.get('firstName');
  }

  public get lastNameControl() {
    return this.userForm.get('lastName');
  }

  public get emailControl() {
    return this.userForm.get('email');
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}
