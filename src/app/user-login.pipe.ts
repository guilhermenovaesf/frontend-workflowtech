import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userLogin',
  standalone: true
})
export class UserLoginPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
