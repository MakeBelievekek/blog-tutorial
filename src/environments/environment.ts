// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AbstractAuthenticationService} from "../app/shared/data-acess/abstraction/abstract-authentication-service";
import {MockAuthenticationService} from "../app/shared/data-acess/mock-authentication.service";
import {AbstractBlogPostService} from "../app/blog/data-acess/abstraction/abstract-blog-post.service";
import {MockBlogPostService} from "../app/blog/data-acess/mock-blog-post.service";
import {AbstractRegistrationService} from "../app/register/data-acess/abstraction/abstract-registration.service";
import {MockRegistrationService} from "../app/register/data-acess/mock-registration.service";

export const environment = {
  production: false,
  providers: {
    appModule: [
      {
        provide: AbstractAuthenticationService,
        useClass: MockAuthenticationService
      },
      {
        provide: AbstractBlogPostService,
        useClass: MockBlogPostService
      },
      {
        provide: AbstractRegistrationService,
        useClass: MockRegistrationService
      },
    ]
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
