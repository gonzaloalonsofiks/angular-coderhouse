import { Component } from '@angular/core';
import { Employee } from '../../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(private matDialog: MatDialog) {}

  openNewUserDialog(): void {
    this.matDialog.open(NewUserDialogComponent);
  }

  deleteUser(email: string): void {
    this.employees = this.employees.filter((i) => i.email !== email);
  }

  displayedColumns: string[] = [
    'employeeName',
    'employeeEmail',
    'employeeJobTitle',
    'employeeJobArea',
    'employeeContractType',
    'actions',
  ];

  employees: Employee[] = [
    {
      firstName: 'Wesley',
      lastName: 'Jewess',
      email: 'wjewess0@github.io',
      gender: 'Male',
      jobTitle: 'Marketing Manager',
      jobArea: 'Marketing',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Briggs',
      lastName: 'Whitlam',
      email: 'bwhitlam1@elegantthemes.com',
      gender: 'Male',
      jobTitle: 'Electrical Engineer',
      jobArea: 'Human Resources',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Aldus',
      lastName: 'Pauluzzi',
      email: 'apauluzzi2@myspace.com',
      gender: 'Male',
      jobTitle: 'Associate Professor',
      jobArea: 'Sales',
      contractType: 'Intern',
      active: true,
    },
    {
      firstName: 'Frederic',
      lastName: 'Nand',
      email: 'fnand3@booking.com',
      gender: 'Male',
      jobTitle: 'Payment Adjustment Coordinator',
      jobArea: 'Sales',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Ambros',
      lastName: 'Whitchurch',
      email: 'awhitchurch4@bloomberg.com',
      gender: 'Male',
      jobTitle: 'Office Assistant II',
      jobArea: 'Marketing',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Lev',
      lastName: 'Doddemeade',
      email: 'ldoddemeade5@dailymail.co.uk',
      gender: 'Polygender',
      jobTitle: 'Account Executive',
      jobArea: 'Sales',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Dari',
      lastName: 'Gibberd',
      email: 'dgibberd6@europa.eu',
      gender: 'Female',
      jobTitle: 'Internal Auditor',
      jobArea: 'Marketing',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Gwenette',
      lastName: 'Milkeham',
      email: 'gmilkeham7@bloomberg.com',
      gender: 'Bigender',
      jobTitle: 'Geological Engineer',
      jobArea: 'Operations',
      contractType: 'Full time',
      active: false,
    },
    {
      firstName: 'Rodolph',
      lastName: 'Deville',
      email: 'rdeville8@fc2.com',
      gender: 'Male',
      jobTitle: 'Cost Accountant',
      jobArea: 'Operations',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Pavia',
      lastName: 'Fackrell',
      email: 'pfackrell9@simplemachines.org',
      gender: 'Female',
      jobTitle: 'VP Quality Control',
      jobArea: 'Sales',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Vin',
      lastName: 'Richten',
      email: 'vrichtena@netlog.com',
      gender: 'Female',
      jobTitle: 'Senior Editor',
      jobArea: 'Human Resources',
      contractType: 'Intern',
      active: true,
    },
    {
      firstName: 'Barnett',
      lastName: 'Cromleholme',
      email: 'bcromleholmeb@uiuc.edu',
      gender: 'Male',
      jobTitle: 'Project Manager',
      jobArea: 'Marketing',
      contractType: 'Full time',
      active: false,
    },
    {
      firstName: 'Toinette',
      lastName: 'Braxay',
      email: 'tbraxayc@mayoclinic.com',
      gender: 'Female',
      jobTitle: 'Developer IV',
      jobArea: 'Sales',
      contractType: 'Intern',
      active: true,
    },
    {
      firstName: 'Crissie',
      lastName: 'McLae',
      email: 'cmclaed@epa.gov',
      gender: 'Female',
      jobTitle: 'Programmer IV',
      jobArea: 'Marketing',
      contractType: 'Full time',
      active: true,
    },
    {
      firstName: 'Chlo',
      lastName: 'McMickan',
      email: 'cmcmickane@1688.com',
      gender: 'Female',
      jobTitle: 'Clinical Specialist',
      jobArea: 'Human Resources',
      contractType: 'Full time',
      active: false,
    },
  ];
}
