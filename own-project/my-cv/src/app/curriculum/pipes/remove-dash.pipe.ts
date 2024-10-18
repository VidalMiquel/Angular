import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDash'
})
export class RemoveDashPipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {

    if (!value) return value;
    return value.replace(/-/g, ' ');
  }
}
