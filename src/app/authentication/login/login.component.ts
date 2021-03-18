import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  Uloginform: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder) { 
    this.Uloginform = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  public errorHandling = (control: string, error: string) => {
    return this.Uloginform.controls[control].hasError(error);
  }
}
