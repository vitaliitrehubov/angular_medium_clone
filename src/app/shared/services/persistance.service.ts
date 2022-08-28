import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PersistanceService {

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      console.error(error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch(error) {
      console.error(error);
      return null;
    }
  }
}

