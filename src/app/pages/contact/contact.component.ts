import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;
  termscond: any;
  termscondph: any;
  termscondem: any;
  constructor(private formBuilder: FormBuilder, private Srvc: ConvserviceService) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(5)])],
     // address: ['', Validators.required]
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.contactForm.controls[control].hasError(error);
  }

  ngOnInit(): void {
    this.Srvc.getTerms().subscribe((res:any)=>
    {
      debugger
      //ContactPhone ContactEmail
  
      this.termscondph = res.data.find(i => i.key == 'ContactPhone').value
      this.termscondem = res.data.find(i => i.key == 'ContactEmail').value

          this.contactForm.controls['phone'].setValue(this.termscondph)
          this.contactForm.controls['email'].setValue(this.termscondem)
    })
  }

  contactSave() {
    this.submitted = true;
    if (!this.contactForm.invalid) {
      const data =

          {
            "ContactPhone": this.contactForm.controls['phone'].value,
            "ContactEmail": this.contactForm.controls['email'].value,
           
          }

      this.Srvc.setCmscond(data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          Swal.fire('', 'updated', 'success');
        }
      })
    }
  }

  alphabate(event) {
    console.log(event)
    // alert(event.keyCode)
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 65 && charCode < 90) || (charCode > 97 && charCode < 122)) {
      return false;
    }
    return true;
  }

}
