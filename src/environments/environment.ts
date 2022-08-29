// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://conduit.productionready.io/api',
  apiUrlUser: 'https://conduit.productionready.io/api/user',
  apiUrlArticles: 'https://conduit.productionready.io/api/articles',
  apiUrlRegister: 'https://conduit.productionready.io/api/users',
  apiUrlLogin: 'https://conduit.productionready.io/api/users/login',
  articlesPerPage: 20
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
