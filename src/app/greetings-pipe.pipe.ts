import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingsPipe',
  standalone: true
})
export class GreetingsPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}`;
  }

}
