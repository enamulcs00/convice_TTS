import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  Faqcheck:FormGroup;
  termscond: any;
  submitted:boolean;
  constructor(private Srvc:ConvserviceService,private formBuilder:FormBuilder) 
  {

  this.Faqcheck = this.formBuilder.group({
    specification: this.formBuilder.array([], Validators.required),
  })

  }

  ngOnInit(): void {
    this.add()
  }
  add(){ 
      this.Srvc.getTerms().subscribe((res:any)=>
      {
        this.termscond = res.data[4].value
        this.termscond = res.data.find(i => i.key == 'FAQs').value
        this.setSpecifications(this.termscond)
      })
  } 

  addNewSpecification() {
    this.specification().push(this.newSpecifiaction())
  }
  removeSpecification(i: number) {
    this.specification().removeAt(i);
  }

  newSpecifiaction(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required)
    })
  }
 specification(): FormArray {
    return this.Faqcheck.get('specification') as FormArray;
  }

  public errorHandling = (control: string, error: string) => {
    return this.Faqcheck.controls[control].hasError(error);
  }

  saveFaq()
  {
    this.submitted = true;
    if(!this.Faqcheck.invalid)
    {
      let body={
        FAQs:this.Faqcheck.get('specification').value
      }
      this.Srvc.setCmscond(body).subscribe((res:any)=>
      {
        if(res.statusCode == 200)
        {
         Swal.fire('','Updated FAQs','success')
        }
      })
    }
 
  }

  setSpecifications(item) {
    const formArray = new FormArray([]);
    for (let x of item) {
      console.log(x)
      formArray.push(this.formBuilder.group({
        question: x.question,
        answer: x.answer
      }));
    }
    this.Faqcheck.setControl('specification', formArray)
  }
}
