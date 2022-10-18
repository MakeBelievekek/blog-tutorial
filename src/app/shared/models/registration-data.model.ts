export interface IUserInfoData{
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordAgain: string;
}

export interface IOptInData{
  gtc: boolean;
  gdpr: boolean;
  newsLetter: boolean;
}

export interface IRegistrationData {
  userInfo: IUserInfoData;
  optIn: IOptInData;
}
