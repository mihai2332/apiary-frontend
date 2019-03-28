import {Component, Injector, OnInit} from '@angular/core';
import {SignUpInfo} from '../auth/model/sigup-info';
import {AuthService} from '../auth/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../services/notification.service';

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

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private injector: Injector) {
  }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      username: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  register() {
    this.signupInfo = new SignUpInfo(
      this.registerFormGroup.get('name').value,
      this.registerFormGroup.get('username').value,
      this.registerFormGroup.get('email').value,
      this.registerFormGroup.get('password').value
    );
    if (this.signupInfo.name === '' || this.signupInfo.username === '' || this.signupInfo.email === '' || this.signupInfo.password === '') {
      const notificationService = this.injector.get(NotificationService);
      notificationService.notify('All fields must be filled!');
    } else {
      this.signUp();
    }
  }

  private signUp() {
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

  get username() {
    return this.registerFormGroup.get('username');
  }

  get name() {
    return this.registerFormGroup.get('name');
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get password() {
    return this.registerFormGroup.get('password');
  }
}
