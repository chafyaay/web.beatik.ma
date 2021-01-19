import { Component, OnInit } from '@angular/core';
import { Observable, EventData } from '@nativescript/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigatorService } from '@src/app/services/navigator.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isSubmitted = false;
  mail: string;
  useMobile = false;
  useEmail = true;
  checked = false
  msg: string;
  errMsg: string;

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private route: NavigatorService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      'email': [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      'mobile': [Validators.required, Validators.pattern(/^(0[6-7](\s?){1}[0-9]{8})$/)]
    })
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

    if (this.useEmail) {
      if (this.f.get('email').valid) this.errMsg = ""
      else {
        this.errMsg = 'Email non valide';
        this.isSubmitted = false
      }
    } else {
      if (this.f.get('mobile').valid) this.errMsg = ""
      else {
        this.errMsg = 'Numéro de téléphone non valide';
        this.isSubmitted = false

      }
    }

  }


  setVialidatorStyle(fname: string) {
    if (this.f.get(fname).invalid) return 'not-valid'
  }



  forgetPassword() {
    this.route.navigate('forgot-password', { name: 'slide', duration: 500, cuve: 'e' });
  }



  onUse(c: number) {


    if (c == 0) {
      if (this.useEmail) return;
      else {
        this.useEmail = !this.useEmail
        this.useMobile = !this.useMobile
      }


    } else {
      if (this.useMobile) return;
      else {
        this.useEmail = !this.useEmail
        this.useMobile = !this.useMobile
      }
    }
    this.errMsg = ""

  }

  submit() {
    if (this.useEmail) {
      if (this.f.get('email').valid) {
        this.errMsg = ""
        this.msg = this.f.get('email').value;
        this.isSubmitted = true
      }
      else {
        this.errMsg = 'Email non valide';
        this.isSubmitted = false;
      }
    } else {
      this.errMsg = ""
      if (this.f.get('mobile').valid) { this.msg = this.f.get('mobile').value; this.isSubmitted = true; }
      else {
        this.errMsg = 'Numéro de téléphone non valide';
        this.isSubmitted = false;
      }
    }


  }
}


