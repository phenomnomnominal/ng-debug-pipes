import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { GlobalPipe } from './global-pipe';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'console'
})
export class ConsolePipe implements PipeTransform {
  transform <T> (...args: Array<T>): string {
    console.log(...args);
    return '';
  }
}

GlobalPipe(ConsolePipe);