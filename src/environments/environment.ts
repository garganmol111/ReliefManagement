// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCiqjeOhc69oE1g6EYJOky5HgIJzFd8lgA',
    authDomain: 'elicit-6896d.firebaseapp.com',
    databaseURL: 'https://elicit-6896d.firebaseio.com',
    projectId: 'elicit-6896d',
    storageBucket: 'elicit-6896d.appspot.com',
    messagingSenderId: '968630590222',
    appId: '1:968630590222:web:67ff44b64bb5e3b4'
  },
  mapbox: {
    accesssToken: 'pk.eyJ1IjoiYXl1c2gtbWFoYWphbiIsImEiOiJjanptcmt4cTIwNnY5M25ueTN2NHZsNHdlIn0.pmHv4q5SGzgsIZMBJ_N_5A'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
