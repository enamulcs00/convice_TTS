import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import  { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  signUpform: FormGroup;
  submitted:boolean = false;
  file: any;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  profilePic: any;
  image: any;
  name: any;
  email: any;
  phone: any;
  constructor(private route:ActivatedRoute, private _route:Router,private Srvc:ConvserviceService,private formBuilder: FormBuilder)
  {
  this.signUpform = formBuilder.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    // phone:['',Validators.required]
  })
  }

  ngOnInit()
{
  this.Srvc.getProfile().subscribe((res:any)=>
  {
    this.signUpform.controls['name'].setValue(res.data.fullName)
    this.signUpform.controls['email'].setValue(res.data.email)
    // this.signUpform.controls['phone'].setValue(res.data.phoneNo)
    this.profilePic = res.data.image
    this.name = res.data.fullName;
    this.email = res.data.email;
    // this.phone = res.data.phoneNo;
  })
}


  onChange(event,type) {
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
       // if (type === 'image') {
          this.image = event.target.result;
       // }
 }

 const formData = new FormData();
 formData.append('file', file);
 this.Srvc.uploadPro(formData).subscribe((res: any) => {
 if(res.statusCode == 200)
 {
   this.profilePic = res.data.filePath
 }
 })
}
  }
  public errorHandling = (control: string, error: string) => {
    return this.signUpform.controls[control].hasError(error);
  }


  updateProfile()
  {
  this.submitted = true;

  const data =
  {
    "fullName":this.signUpform.controls['name'].value,
    "email": this.signUpform.controls['email'].value,
    // "phoneNo":this.signUpform.controls['phone'].value,
     "image": this.profilePic
  }
  this.Srvc.updateProfile(data).subscribe((res:any)=>
  {
    if(res.statusCode == 200)
    {
      Swal.fire('Updated','Updated successfully','success')
      this.signUpform.controls['name'].setValue(res.data.fullName)
      this.signUpform.controls['email'].setValue(res.data.email)
      // this.signUpform.controls['phone'].setValue(res.data.phoneNo)
      this.profilePic = res.data.image
      this.name = res.data.fullName;
      this.email = res.data.email;
      this.phone = res.data.phoneNo;
      this.Srvc.searchdata();
    }
    else{
      Swal.fire('',res.message,'error')
    }

  })
  }

  alphabate(event)
  {
   // alert(event.keyCode)
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      return true;
    }
    return false;
  }
  numberonly(event)
  {
      // alert(event.keyCode)
      const charCode = (event.which) ? event.which : event.keyCode;
      if ((charCode > 65 && charCode < 90) || (charCode > 97 && charCode < 122)) {
        return false;
      }
      return true;
  }
}
