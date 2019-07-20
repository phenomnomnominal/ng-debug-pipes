import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { GlobalPipe } from './global-pipe';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'debug'
})
export class DebugPipe implements PipeTransform {
  transform <T> (value: T): string {
    // tslint:disable-next-line:no-debugger
    debugger;
    return typeof value === 'string' ? value : JSON.stringify(value, null, '  ');
  }
}

GlobalPipe(DebugPipe);