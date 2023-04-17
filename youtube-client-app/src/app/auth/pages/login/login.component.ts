import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CustomvalidationService } from '../../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  hide = true;

  location: Location;

  onSubmit() {
    if (this.logInForm.status !== 'VALID') return;

    this.userService.logIn(this.logInForm.controls['email'].value);
    this.router.navigate(['/']);
  }

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
  ) {}

  ngOnInit() {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, this.customValidator.checkPassword()],
      ],
    });
  }
}
