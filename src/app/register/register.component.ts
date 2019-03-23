import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/model/sigup-info';
import {AuthService} from '../auth/auth.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      username: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  register() {
    this.signupInfo = new SignUpInfo(
      this.registerFormGroup.get('name').value,
      this.registerFormGroup.get('username').value,
      this.registerFormGroup.get('email').value,
      this.registerFormGroup.get('password').value
    );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
