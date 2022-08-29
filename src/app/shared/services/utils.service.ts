import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UtilsService {
  range(start: number, end: number): number[] {
    end += 1;
    const array = Array.from(Array(end).keys());

    return array.slice(start);
  }
}
