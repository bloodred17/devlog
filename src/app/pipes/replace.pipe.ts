import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'replace',
  standalone: true,
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, searchValue: string | RegExp = /\s/, replaceValue: string = '_'): string {
    return value?.replace(searchValue, replaceValue);
  }

}
