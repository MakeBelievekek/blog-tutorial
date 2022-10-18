import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {distinctUntilChanged, map, startWith} from "rxjs";
import {FormState} from "../../../shared/models/form-state";
import {IOptInForm} from "../../../shared/models/opt-in-form.model";


@Injectable()
export class OptInForm implements IOptInForm {
  private _gtc: FormControl<boolean> = new FormControl(false, {
    nonNullable: true,
    validators: [Validators.required]
  });
  private _gdpr: FormControl<boolean> = new FormControl(false, {
    nonNullable: true,
    validators: [Validators.required]
  });
  private _newsLetter: FormControl<boolean> = new FormControl(false, {
    nonNullable: true
  });
  private _game: FormControl<boolean> = new FormControl(false, {
    nonNullable: true
  });

  private _form = new FormGroup<IOptInForm>(
    {
      gtc: this.gtc,
      gdpr: this.gdpr,
      newsLetter: this.newsLetter,
      game: this.game,
    },
    {
      updateOn: "submit"
    }
  )

  constructor() {
  }

  isValid = this.form.statusChanges.pipe(
    startWith(this.form.status),
    distinctUntilChanged(),
    map((status: string) => status === FormState.VALID)
  )

  isInValid = this.form.statusChanges.pipe(
    startWith(this.form.status),
    distinctUntilChanged(),
    map((status: string) => status === FormState.INVALID)
  )

  get gtc(): FormControl<boolean> {
    return this._gtc;
  }

  get gdpr(): FormControl<boolean> {
    return this._gdpr;
  }

  get newsLetter(): FormControl<boolean> {
    return this._newsLetter;
  }

  get game(): FormControl<boolean> {
    return this._game;
  }

  get form(): FormGroup<IOptInForm> {
    return this._form;
  }
}
