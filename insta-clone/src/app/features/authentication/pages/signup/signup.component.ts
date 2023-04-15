import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      full_name: '',
      username: '',
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.signupForm.value);
  }
}
