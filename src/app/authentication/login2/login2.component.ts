import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import  { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2'
import { de } from 'date-fns/locale';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component {
  Uloginform: FormGroup;
  submitted:boolean = false;
  forgotPass: FormGroup;
  constructor(private route : Router,private _rout: ActivatedRoute,private formBuilder: FormBuilder,private Srvc:ConvserviceService) {

    this.Uloginform = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      rememberMe:['']
    });

    this.forgotPass = this.formBuilder.group({
      forgotname:['',[Validators.required,Validators.email]]
    })

    if(localStorage.getItem('remember')) {
      let formData = JSON.parse(localStorage.getItem('remember'))
      this.Uloginform.patchValue({
        username: formData.username,
        password: formData.password,
        rememberMe: formData.rememberMe
      })
    }
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

  public errorHandlingfog = (control: string, error: string) => {
    return this.forgotPass.controls[control].hasError(error);
  }

  loginAdmin()
  {
    this.submitted = true;
    const data=
    {
     email: this.Uloginform.controls['username'].value,
     password:this.Uloginform.controls['password'].value
    }
    this.Srvc.login(data).subscribe((res:any)=>
    {
      if(res.statusCode == 200)
      {
        localStorage.setItem('token',res.data.accessToken)
        if(this.Uloginform.value.rememberMe) {
          localStorage.setItem('remember', JSON.stringify(this.Uloginform.value))
        } else {
          localStorage.removeItem('remember')
        }
      this.route.navigate(['/dashboard']);
      }
      if(res.statusCode == 400){
        Swal.fire('Oops.',res.message,'error');
      }
    })
  }


  showOptions(event)
  {
   console.log('event',event);
  }

  submitEm()
  {
    this.submitted = true
    debugger
    const data =
    {
      "email":this.forgotPass.controls['forgotname'].value
    }
    if(this.forgotPass.valid)
    {
      this.Srvc.Forgotpassword(data).subscribe((res:any)=>
      {
        if(res.statusCode == 400)
        {
          Swal.fire('Oops',res.message,'error');
        }
        if(res.statusCode == 200)
        {
          Swal.fire(this.forgotPass.controls['forgotname'].value,res.message,'success');
        }
      })
    }

  }
}
