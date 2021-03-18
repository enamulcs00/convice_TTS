import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import  { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html'
})
export class changepasswordComponent {
  changePswdform: FormGroup;
  confirmErrorr: boolean;
  pass: any = {}
  submitted: boolean = false;
  constructor(private route : Router,private _rout: ActivatedRoute,private formBuilder: FormBuilder,private Srvc:ConvserviceService) 
  {
    this.changePswdform = this.formBuilder.group({
      password:['',Validators.required],
      newpassword:['',Validators.required],
      confirmpassword:['',Validators.required]
    });
  }

  onPasswordSubmit(f: NgForm) {
 
    this.submitted = true;
if (this.pass.newPassword != this.pass.cpassword) {
this.confirmErrorr = true
} else {
this.confirmErrorr = false
let form =
{
"oldPassword": this.pass.oldPassword,
"newPassword": this.pass.newPassword
}
console.log('res',form)
debugger
this.Srvc.changePass(form).subscribe((res:any)=>
{
  if(res.statusCode == 200)
  {
    Swal.fire('Done','Updated succesfully','success');
    this.route.navigate(['/dashboard']);
  }
})
}
}
}
