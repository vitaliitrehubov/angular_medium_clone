import { TestBed } from '@angular/core/testing';

import { PersistanceService } from 'src/app/shared/services/persistance.service';

describe('persistance service', () => {
  let lsService: PersistanceService;
  let storage = {};

  beforeEach(() => {
    lsService = new PersistanceService();

    spyOn(window.localStorage, 'getItem').and.callFake(
      (key: string): string | null => storage[key] || null
    );

    spyOn(window.localStorage, 'removeItem').and.callFake(
      (key: string): void => {
        delete storage[key];
      }
    );

    spyOn(window.localStorage, 'setItem').and.callFake(
      (key: string, value: string): void => {
        storage[key] = value;
      }
    );
  });

  afterEach(() => localStorage.clear());

  it('should set value to localStorage correctly', () => {
    const key = 'token';
    const value = '123456'
    lsService.set(key, value);

    expect(storage[key]).toEqual(JSON.stringify(value));
  });

  it('should retrieve a key from localStorage correctly', () => {
    const key = 'token';
    const value = '123456';
    storage[key] = JSON.stringify(value);

    expect(lsService.get(key)).toEqual(value);
  });

})

