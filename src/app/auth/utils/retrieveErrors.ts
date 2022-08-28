import { HttpErrorResponse } from '@angular/common/http';

export const retrieveErrors = (errorRes: HttpErrorResponse) =>
  Object.entries(errorRes.error.errors)
    .reduce((acc, [key, value]) => [...acc, `${key} ${value}`], []);

