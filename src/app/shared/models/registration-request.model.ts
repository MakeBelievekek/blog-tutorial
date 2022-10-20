export interface IRegistrationRequest {
  userInfo: {
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    passwordAgain: string;
  };
  optIn: {
    gtc: boolean;
    gdpr: boolean;
    newsLetter: boolean;
    game: boolean
  }
}
