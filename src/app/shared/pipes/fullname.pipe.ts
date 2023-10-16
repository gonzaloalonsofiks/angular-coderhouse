import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/interfaces/index';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(value: Employee, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName.toUpperCase()}`;
  }
}
