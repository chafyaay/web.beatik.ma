import { NavigatorService } from '../../services/navigator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventData } from '@nativescript/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUpForm: FormGroup;
  public isStayConnectedChecked = false;

  constructor(private fb: FormBuilder, private route: NavigatorService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      'email': [Validators.required, ''],
      'password': [Validators.required, '']
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
  }


  setVialidatorStyle(fname: string) {
    if (this.f.get(fname).invalid) return 'not-valid'
  }

  stayConnected() {
    this.isStayConnectedChecked = !this.isStayConnectedChecked;
  }
  forgetPassword() {
    this.route.navigate('forgot-password', { name: 'slide', duration: 500, cuve: 'e' });
  }
  submit() {

  }
}
