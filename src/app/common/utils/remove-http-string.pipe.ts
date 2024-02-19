import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHttpString',
  standalone: true
})
export class RemoveHttpStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(^\w+:|^)\/\//, '')
  }

}
