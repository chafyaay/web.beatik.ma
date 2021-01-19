import { EventData, TextField } from '@nativescript/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({

      'fname': [Validators.required, [Validators.pattern(/^[a-zA-Z]+$/)]]
      ,

      'lname': [Validators.required, [Validators.pattern(/^[a-zA-Z]+$/)]]
      ,

      'mobile': [Validators.required, '']
      ,

      'email': [Validators.required, '']
      ,

      'adress': ['']
      ,

      'ville': [Validators.required, '']
      ,

      'password': [Validators.required, '']
      ,

      'repassword': [Validators.required, '']

    }

    )
  };

  get f() {
    return this.signUpForm;
  }

  ontextchange(args: EventData) {
    const input = args.object as any;
    const fn = input.FormControlName;
    console.log(input)

    const isValid = this.f.get(fn).valid;
    this.f.get(fn).patchValue(input.text);

    input.className = '';
    input.className = (isValid ? 'form-control' : 'form-control not-valid');
  }


  setVialidatorStyle(fname: string) {
    if (this.f.get(fname).invalid) return 'not-valid'
  }
  submit() {

  }
}
