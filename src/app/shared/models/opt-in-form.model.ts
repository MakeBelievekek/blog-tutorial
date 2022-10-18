import {FormControl} from "@angular/forms";

export interface IOptInForm {
  gtc: FormControl<boolean>;
  gdpr: FormControl<boolean>;
  newsLetter: FormControl<boolean>;
  game: FormControl<boolean>
}
