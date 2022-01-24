// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://localhost:44348/api/',
  // googleTrendsAPI: 'http://localhost:4000',
  googleTrendsAPI: 'https://nodejs-gtrends-api2.herokuapp.com',
  googleTrendsAPIRay: ' https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=0&geo=RO&cat=all&ed=20210323&ns=15',
  // googleTrendsAPI: 'https://apigoogletrends.herokuapp.com/RO' // BigDollar
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
