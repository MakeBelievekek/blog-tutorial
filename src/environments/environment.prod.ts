import {AbstractAuthenticationService} from "../app/shared/data-acess/abstraction/abstract-authentication-service";

export const environment = {
  production: true,
  providers: {
    appModule: [
      {
        provide: AbstractAuthenticationService,
        useClass: null
      }
    ]
  },
};
