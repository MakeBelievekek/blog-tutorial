import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordMatchValidator(password: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordNotMatch = password !== control.value;
    return passwordNotMatch ? {passwordMisMatch: {value: true}} : null;
  };
}
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('password')?.value;
  const alterEgo = control.get('passwordAgain')?.value;

  return name && alterEgo && name.value === alterEgo.value ? { passwordMisMatch: true } : null;
};
