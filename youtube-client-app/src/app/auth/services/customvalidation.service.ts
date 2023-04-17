import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomvalidationService {
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(
        '^(?=.*?[A-Z])(?=.*?[$,&,+,:,;,=,?,@,#,|,<,>,.,^,*,(,),%,!,-,])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
      );
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  checkURL() {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let valid = true;

      try {
        new URL(control.value);
      } catch {
        valid = false;
      }

      return valid ? null : { invalidUrl: true };
    };
  }

  checkImageURL() {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let valid = true;

      try {
        const answer = new URL(control.value);
        console.log(answer);
        const fileType = control.value.split('.').pop();
        const types = ['png', 'jpg', 'jpeg', 'GIF', 'svg'];
        if (!types.includes(fileType)) valid = false;
      } catch {
        valid = false;
      }

      return valid ? null : { invalidUrl: true };
    };
  }
}
